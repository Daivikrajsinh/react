import { 
    fetchPopularMovies as fetchPopularMoviesAPI,
    searchMovies as searchMoviesAPI,
    fetchMovieDetails as fetchMovieDetailsAPI 
  } from '../../api/tmdb';
  
  export const fetchPopularMovies = () => async (dispatch) => {
    dispatch({ type: 'FETCH_MOVIES_REQUEST' });
    try {
      const response = await fetchPopularMoviesAPI();
      dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data.results });
    } catch (error) {
      dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
    }
  };
  
  export const searchMovies = (query) => async (dispatch) => {
    if (!query.trim()) {
      dispatch({ type: 'CLEAR_SEARCH_RESULTS' });
      return;
    }
    
    dispatch({ type: 'SEARCH_MOVIES_REQUEST' });
    try {
      const response = await searchMoviesAPI(query);
      dispatch({ type: 'SEARCH_MOVIES_SUCCESS', payload: response.data.results });
    } catch (error) {
      dispatch({ type: 'SEARCH_MOVIES_FAILURE', payload: error.message });
    }
  };
  
  export const fetchMovieDetails = (id) => async (dispatch) => {
    dispatch({ type: 'FETCH_MOVIE_DETAILS_REQUEST' });
    try {
      const response = await fetchMovieDetailsAPI(id);
      dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_MOVIE_DETAILS_FAILURE', payload: error.message });
    }
  };