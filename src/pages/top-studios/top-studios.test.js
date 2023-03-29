import axios from "axios";
import { getMovies } from "../../services/movieService";

jest.mock("axios");

test("deve listar o top studios", () => {
  const topStudios = { years: [{ year: 1986, winnerCount: 2 }] };

  axios.get.mockResolvedValue(topStudios);

  return getMovies
    .getListTopStudios()
    .then((res) => expect(res).toEqual(topStudios));
});
