import axios from 'axios';

const API_KEY = 'your_tmdb_api_key';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
};

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const fetchMovieDetails = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
};