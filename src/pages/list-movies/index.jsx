import * as React from "react";
import { useState, useRef } from "react";
import { getMovies } from "../../services/movieService";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import Grid from "@mui/material/Grid";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@material-ui/core/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Table } from "../../global-js";
import { Box } from "@mui/system";


export default function ListMovies() {
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    getMovies.getListMovies().then((res) => setMovies(res.data.content));
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    {
      id: "id",
      label: "Id",
      minWidth: 100,
      align: "center",
    },
    {
      id: "year",
      label: "Year",
      minWidth: 200,
      align: "center",
    },
    {
      id: "title",
      label: "Title",
      minWidth: 300,
      align: "center",
    },
    {
      id: "winner",
      label: "Winner?",
      minWidth: 200,
      align: "center",
      format: (value) => (value ? "Yes" : "No"),
    },
  ];

  const SearchButton = () => (
    <IconButton onClick={getListMovieYear}>
      <SearchIcon />
    </IconButton>
  );

  const year = useRef("");
  const getListMovieYear = () => {
    getMovies
      .getListMovies(year.current.value, age)
      .then((res) => setMovies(res.data.content));
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    getMovies
      .getListMovies(year.current.value, event.target.value)
      .then((res) => setMovies(res.data.content));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <TableContainer component={Paper} variant="outlined">
        <h1>List movies</h1>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                  {column.id === "year" ? (
                    <TextField
                      id="filled-number"
                      fullWidth
                      variant="standard"
                      type="number"
                      placeholder="Search by year"
                      inputRef={year}
                      InputProps={{ endAdornment: <SearchButton /> }}
                    />
                  ) : (
                    ""
                  )}
                  {column.id === "winner" ? (
                    <Select
                      id="demo-simple-select-autowidth"
                      value={age}
                      onChange={handleChange}
                      autoWidth
                      label="Age"
                      fullWidth
                      variant="standard"
                    >
                      <MenuItem value="">Yes/No</MenuItem>
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
                  ) : (
                    ""
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {movies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    // role="checkbox"
                    //tabIndex={-10}
                    key={row.code}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "boolean"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={movies.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <Item></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
