import {VFC} from "react";
import {Composer} from "../api/ComposerResponse";
import {CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

interface ComposerListProps {
  composers: Composer[],
  isLoading: boolean
}

export const ComposerList: VFC<ComposerListProps> = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <CircularProgress/>
      </div>
    )
  }
  if (props.composers.length === 0) {
    return <></>
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">complete name</TableCell>
              <TableCell align="right">birth</TableCell>
              <TableCell align="right">death</TableCell>
              <TableCell align="right">epoch</TableCell>
              <TableCell align="right">portrait</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.composers.map((composer) => (
              <TableRow>
                <TableCell align="right">{composer.name}</TableCell>
                <TableCell align="right">{composer.complete_name}</TableCell>
                <TableCell align="right">{composer.birth}</TableCell>
                <TableCell align="right">{composer.death}</TableCell>
                <TableCell align="right">{composer.epoch}</TableCell>
                <TableCell align="right"><img src={composer.portrait} alt="portrait of composer"/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
