import { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import {
  Divider,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  TableContainer
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@material-ui/core/TextField";
import { getMovies } from "../../services/movieService";
import { Table } from "../../global-js";

export default function ListMovieYear() {
  const [listMovieWinner, setMovieWinner] = useState([]);

  const valueRef = useRef("");
  const SearchButton = () => (
    <IconButton onClick={getMovieWinner}>
      <SearchIcon />
    </IconButton>
  );

  const getMovieWinner = (event) => {
    getMovies
      .getMovieWinner(valueRef.current.value)
      .then((res) => setMovieWinner(res.data));
  };
  return (
    <TableContainer component={Paper} variant="outlined">
      <h1>List movie winners by year</h1>
      <TextField
        id="filled-number"
        style={{ margin: 8 }}
        fullWidth
        variant="standard"
        type="number"
        placeholder="Search by year"
        inputRef={valueRef}
        InputProps={{ endAdornment: <SearchButton /> }}
      />
      <Divider />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listMovieWinner.map((row) => (
            <TableRow>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.year} </TableCell>
              <TableCell align="right">{row.title} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
