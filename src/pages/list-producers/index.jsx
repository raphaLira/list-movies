import React from "react";
import {
  Divider,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { getMovies } from "../../services/movieService";
import { Table, Item } from "../../global-js";

export default function ListProducers() {
  const [maxIntervalWin, setMaxIntervalWin] = useState([]);
  const [minIntervalWin, setMinIntervalWin] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await getMovies.getMaxMinIntervalWins();
      setMinIntervalWin(response.min);
      setMaxIntervalWin(response.max);
    }
    fetchData();
  }, []);

  return (
    <Item>
      <h1>Producers with longest and shortest interval between wins</h1>
      <Item>
        <span>Maximum</span>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Producer</TableCell>
              <TableCell align="right">Interval</TableCell>
              <TableCell align="right">Previous year</TableCell>
              <TableCell align="right">Following year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {maxIntervalWin.map((row) => (
              <TableRow>
                <TableCell align="right">{row.producer}</TableCell>
                <TableCell align="right">{row.interval} </TableCell>
                <TableCell align="right">{row.previousWin} </TableCell>
                <TableCell align="right">{row.followingWin} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Item>
      <Divider />
      <Item>
        <span>Minimum</span>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Producer</TableCell>
              <TableCell align="right">Interval</TableCell>
              <TableCell align="right">Previous year</TableCell>
              <TableCell align="right">Following year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {minIntervalWin.map((row) => (
              <TableRow>
                <TableCell align="right">{row.producer}</TableCell>
                <TableCell align="right">{row.interval} </TableCell>
                <TableCell align="right">{row.previousWin} </TableCell>
                <TableCell align="right">{row.followingWin} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Item>
    </Item>
  );
}
