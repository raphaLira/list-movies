import Grid from "@mui/material/Grid";
import ListYearsWith from "../list-years-with";
import TopStudios from "../top-studios";
import ListProducers from "../list-producers";
import ListMovieYear from "../list-movie-year";

function DashBoard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <ListYearsWith />
      </Grid>
      <Grid item xs={6} md={6}>
        <TopStudios />
      </Grid>
      <Grid item xs={6} md={6}>
        <ListProducers />
      </Grid>
      <Grid item xs={6} md={6}>
        <ListMovieYear />
      </Grid>
    </Grid>
  );
}

export default DashBoard;
