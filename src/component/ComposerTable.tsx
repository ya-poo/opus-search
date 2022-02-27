import {VFC} from "react";
import {Composer} from "../api/ComposerResponse";
import MaterialTable from "@material-table/core";
import {Navigate} from "react-router-dom";

interface ComposerTableProps {
  composers: Composer[],
}

export const ComposerTable: VFC<ComposerTableProps> = (props) => {

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
      onRowClick={(event, rowData) => {
        if (rowData !== undefined) {
          return <Navigate to={`/composers/${rowData.id}}`} replace/>
        }
      }}
      options={{
        search: true,
        showTitle: false,
        paging: false,
      }}
    />
  )
}
