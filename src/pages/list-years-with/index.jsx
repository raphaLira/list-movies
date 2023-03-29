import React from "react";
import Paper from "@mui/material/Paper";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

import { Table, Item } from "../../global-js";
import { getMovies } from "../../services/movieService";

export default function ListYearsWith() {
  const [listYears, setYearsWinners] = useState([]);

  React.useEffect(() => {
    getMovies
      .getListYearsMultipleWinners()
      .then((res) => setYearsWinners(res.data.years));
  }, []);

  return (
    <Item>
      <h1>List years with multiple winners</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Win count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listYears.map((row) => (
              <TableRow>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.winnerCount} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
}
