import React from "react";
import {
  Divider,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import { useState } from "react";
import { getMovies } from "../../services/movieService";
import { Table, Item } from "../../global-js";
import Paper from "@mui/material/Paper";

export default function ListProducers() {
  const [maxIntervalWin, setMaxIntervalWin] = useState([]);
  const [minIntervalWin, setMinIntervalWin] = useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await getMovies.getMaxMinIntervalWins();
      setMinIntervalWin(response.data.min);
      setMaxIntervalWin(response.data.max);
    }
    fetchData();
  }, []);

  return (
    <Item>
      <h1>Producers with longest and shortest interval between wins</h1>
      <Item>
        <span>Maximum</span>
        <TableContainer component={Paper} variant="outlined">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Producer</TableCell>
                <TableCell align="left">Interval</TableCell>
                <TableCell align="left">Previous year</TableCell>
                <TableCell align="left">Following year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maxIntervalWin.map((row) => (
                <TableRow>
                  <TableCell align="left">{row.producer}</TableCell>
                  <TableCell align="left">{row.interval} </TableCell>
                  <TableCell align="left">{row.previousWin} </TableCell>
                  <TableCell align="left">{row.followingWin} </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Item>
      <Divider />
      <Item>
        <span>Minimum</span>
        <TableContainer component={Paper} variant="outlined">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Producer</TableCell>
                <TableCell align="left">Interval</TableCell>
                <TableCell align="left">Previous year</TableCell>
                <TableCell align="left">Following year</TableCell>
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
        </TableContainer>
      </Item>
    </Item>
  );
}
