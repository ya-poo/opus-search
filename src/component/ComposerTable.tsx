import { useState, VFC } from 'react';
import MaterialTable from '@material-table/core';
import { useNavigate } from 'react-router-dom';
import {
  Button, ButtonGroup, FormControlLabel, FormGroup, Switch,
} from '@mui/material';
import { Composer } from '../api/common';
import { Period, Periods } from '../domain/Period';

interface ComposerTableProps {
  composers: Composer[],
  popularComposerIds: number[],
}

const toYear = (date: string): string => {
  const a = new Date(date);
  return a.getFullYear().toString();
};

const ComposerTable: VFC<ComposerTableProps> = (props) => {
  const navigate = useNavigate();
  const [selectedPeriod, setPeriod] = useState<Period | 'All'>('All');
  const [showPopularComposers, setShowPopularComposers] = useState(true);

  const onPeriodButtonClick = (period: Period | 'All') => {
    setPeriod(period);
  };

  const shouldShow = (composer: Composer): boolean => {
    const okPeriod = selectedPeriod === 'All' || composer.epoch === selectedPeriod;
    const popular = !showPopularComposers || props.popularComposerIds.includes(composer.id);
    return okPeriod && popular;
  };

  const onRowClick = (id: number) => {
    navigate(`/composers/${id}`);
  };

  return (
    <>
      <ButtonGroup aria-label="period filter">
        {['All'].concat(Periods).map((period) => (
          <Button
            variant={period === selectedPeriod ? 'contained' : 'outlined'}
            onClick={() => onPeriodButtonClick(period)}
          >
            {period}
          </Button>
        ))}
      </ButtonGroup>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch defaultChecked />
          }
          label="Popular Composers"
          onChange={(_, check) => {
            setShowPopularComposers(check);
          }}
        />
      </FormGroup>
      <MaterialTable
        columns={[
          { title: 'Name', field: 'name', align: 'left' },
          { title: 'Complete Name', field: 'completeName' },
          { title: 'Birth Year', field: 'birth' },
          { title: 'Death Year', field: 'death' },
          { title: 'Epoch', field: 'epoch' },
          {
            field: 'portrait',
            render: (item) => <img src={item.portrait} alt={`portrait of ${item.name}`} width="80" />,
          },
        ]}
        data={props.composers.filter((composer) => shouldShow(composer)).map((composer) => ({
          name: composer.name,
          completeName: composer.complete_name,
          birth: toYear(composer.birth),
          death: toYear(composer.death),
          epoch: composer.epoch,
          portrait: composer.portrait,
          id: composer.id,
        }))}
        onRowClick={(_, rowData) => (rowData ? onRowClick(rowData.id) : {})}
        options={{
          search: true,
          showTitle: false,
          paging: false,
        }}
      />
    </>
  );
};

export default ComposerTable;
