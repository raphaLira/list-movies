import axios from "axios";
import { getMovies } from "../../services/movieService";

jest.mock("axios");

test("deve mostrar intervalo de prêmios", () => {
  const listInterval = {
    min: [
      {
        producer: "Joel Silver",
        interval: 1,
        previousWin: 1990,
        followingWin: 1991,
      },
    ],
    max: [
      {
        producer: "Matthew Vaughn",
        interval: 13,
        previousWin: 2002,
        followingWin: 2015,
      },
    ],
  };

  axios.get.mockResolvedValue(listInterval);

  return getMovies
    .getMaxMinIntervalWins()
    .then((res) => expect(res).toEqual(listInterval));
});
