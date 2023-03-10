import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

import { Table } from "../../global-js";
import { getMovies } from "../../services/movieService";

export default function ListYearsWith() {
  const [listYears, setYearsWinners] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  React.useEffect(() => {
    getMovies.getListYearsMultipleWinners().then((res) =>
      setYearsWinners(res.data.years)
    );
  }, []);

  return (
    <Item>
      <h1>List years with multiple winners</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Win count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listYears.map((row) => (
              <TableRow>
                <TableCell align="right">{row.year}</TableCell>
                <TableCell align="right">{row.winnerCount} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
}
