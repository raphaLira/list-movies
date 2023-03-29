import axios from "axios";
import { getMovies } from "../../services/movieService";

jest.mock("axios");

test("deve listar os filmes por ano", () => {
  const listMovieYear = [
    { id: "1" },
    { year: "1980" },
    { title: "Cant Stop the Music" },
  ];

  axios.get.mockResolvedValue(listMovieYear);

  return getMovies
    .getMovieWinner(2018)
    .then((data) => expect(data).toEqual(listMovieYear));
});
