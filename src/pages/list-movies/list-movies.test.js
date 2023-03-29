import axios from "axios";
//import { getMovieWinner } from "../../pages/list-movie-year/listMovieYearService"
import { getMovies } from "../../services/movieService";

jest.mock("axios");

test("deve listar todos os filmes", () => {
  const listMovies = {
    content: [
      { id: "1" },
      { year: "1980" },
      { title: "Cant Stop the Music" },
      { studios: ["Studio name"] },
      { producers: ["Producers name"] },
      { winner: true },
    ],
  };

  axios.get.mockResolvedValue(listMovies);

  return getMovies
    .getListMovies(1980, true)
    .then((res) => expect(res).toEqual(listMovies));
});
