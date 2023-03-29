import axios from "axios";

const getListMovies = (year, winner) => {
    const params = {
        page: 0,
        size: 206,
        year: year,
        winner: winner
    }
    return axios.get(`https://tools.texoit.com/backend-java/api/movies`, { params })
};

const getListYearsMultipleWinners = () => {
    return axios.get(`https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners`)
};

const getListTopStudios = () => {
    return axios.get(`https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count`)
};

const getMaxMinIntervalWins = async () => {
    const response = axios.get(`https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers`)
    return (await response)
}

const getMovieWinner = (year) => {
    return axios.get(`https://tools.texoit.com/backend-java/api/movies?winner=true&year=` + year)
};

export const getMovies = { getListMovies, getListYearsMultipleWinners, getListTopStudios, getMaxMinIntervalWins, getMovieWinner }