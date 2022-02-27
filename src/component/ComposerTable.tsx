import {VFC} from "react";
import {Composer} from "../api/ComposerResponse";
import MaterialTable from "@material-table/core";

interface ComposerTableProps {
  composers: Composer[],
  isLoading: boolean
}

export const ComposerTable: VFC<ComposerTableProps> = (props) => {
  // if (props.isLoading || props.composers.length === 0) {
  //   return <></>
  // }
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
          portrait: composer.portrait
        }
      })}
      options={{
        search: true,
        showTitle: false,
      }}
    />
  )
}
