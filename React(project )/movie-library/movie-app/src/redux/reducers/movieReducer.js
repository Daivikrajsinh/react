const initialState = {
    movies: [],
    selectedMovie: null,
    loading: false,
    error: null,
    searchResults: [],
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_REQUEST':
      case 'FETCH_MOVIE_DETAILS_REQUEST':
      case 'SEARCH_MOVIES_REQUEST':
        return { ...state, loading: true, error: null };
      
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, loading: false, movies: action.payload };
      
      case 'FETCH_MOVIE_DETAILS_SUCCESS':
        return { ...state, loading: false, selectedMovie: action.payload };
      
      case 'SEARCH_MOVIES_SUCCESS':
        return { ...state, loading: false, searchResults: action.payload };
      
      case 'FETCH_MOVIES_FAILURE':
      case 'FETCH_MOVIE_DETAILS_FAILURE':
      case 'SEARCH_MOVIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
      
      case 'CLEAR_SEARCH_RESULTS':
        return { ...state, searchResults: [] };
      
      default:
        return state;
    }
  };
  
  export default movieReducer;