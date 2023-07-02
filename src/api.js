import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL
const tokenKey = process.env.REACT_APP_TOKEN

export const getMovieList = async() => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1`,{
        headers: {
            'Authorization': 'Bearer ' + `${tokenKey}`,
            'accept': 'application/json'
        }
    })
    return movie.data.results
}

export const searchMovie = async(q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1`,{
        headers: {
            'Authorization': 'Bearer ' + `${tokenKey}`,
            'accept': 'application/json'
        }
    })
    return search.data.results
}