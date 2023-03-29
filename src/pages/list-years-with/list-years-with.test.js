import axios from "axios";
import { getMovies } from "../../services/movieService";

jest.mock("axios");

test("deve listar anos com mais de um vencedor", () => {
  const listYears = { years: [{ year: 1986, winnerCount: 2 }] };

  axios.get.mockResolvedValue(listYears);

  return getMovies
    .getListYearsMultipleWinners()
    .then((res) => expect(res).toEqual(listYears));
});
