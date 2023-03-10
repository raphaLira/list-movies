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
import { getMovies } from "../../services/movieService";
import { Table } from "../../global-js";

export default function TopStudios() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [listTopStudios, setTopStudios] = useState([]);

  React.useEffect(() => {
    getMovies.getListTopStudios().then((res) =>
      setTopStudios(res.data.studios)
    );
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
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Win count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderedStudios.slice(0, 3).map((row) => (
              <TableRow>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.winCount} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
}
