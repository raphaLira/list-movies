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
import { getMovies } from "../../services/movieService";
import { Table, Item } from "../../global-js";

export default function TopStudios() {
  const [listTopStudios, setTopStudios] = useState([]);

  React.useEffect(() => {
    getMovies
      .getListTopStudios()
      .then((res) => setTopStudios(res.data.studios));
  }, []);

  const orderedStudios = listTopStudios.sort(
    (a, b) => a.winnerCount - b.winnerCount
  );
  return (
    <Item>
      <h1>Top 3 studios with winners</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Win Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedStudios.slice(0, 3).map((row) => (
              <TableRow>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.winCount} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
}
