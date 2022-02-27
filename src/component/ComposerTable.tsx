import {VFC} from "react";
import MaterialTable from "@material-table/core";
import {useNavigate} from "react-router-dom";
import {Composer} from "../api/common";

interface ComposerTableProps {
  composers: Composer[],
}

export const ComposerTable: VFC<ComposerTableProps> = (props) => {
  const navigate = useNavigate();

  const onRowClick = (id: number) => {
    navigate(`/composers/${id}`);
  }

  return (
    <MaterialTable
      columns={[
        {title: 'Name', field: 'name', align: 'left'},
        {title: 'Complete Name', field: 'completeName'},
        {title: 'Birth', field: 'birth'},
        {title: 'Death', field: 'death'},
        {title: 'Epoch', field: 'epoch'},
        {
          title: 'Portrait',
          field: 'portrait',
          render: item => <img src={item.portrait} alt={`portrait of ${item.name}`} width="80"/>
        },
      ]}
      data={props.composers.map((composer) => {
        return {
          name: composer.name,
          completeName: composer.complete_name,
          birth: composer.birth,
          death: composer.death,
          epoch: composer.epoch,
          portrait: composer.portrait,
          id: composer.id,
        }
      })}
      onRowClick={(_, rowData) =>
        rowData ? onRowClick(rowData.id) : {}
      }
      options={{
        search: true,
        showTitle: false,
        paging: false,
      }}
    />
  )
}
