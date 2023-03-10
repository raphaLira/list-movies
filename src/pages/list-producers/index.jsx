/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Divider,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { getMovies } from "../../services/movieService";
import { Table } from "../../global-js";

export default function ListProducers() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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

  // React.useEffect(async () => {
  //   const response = getMovies.getMaxMinIntervalWins();

  //   setMinIntervalWin(response.min);
  //   setMaxIntervalWin(response.max);
  // }, []);

  return (
    <Item>
      <h1>Producers with longest and shortest interval between wins</h1>
      <spam>Maximum</spam>
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
      <Divider />
      <spam>Minimum</spam>
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
  );
}
