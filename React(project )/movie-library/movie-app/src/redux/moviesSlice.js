// src/redux/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    searchResults: [],
    selectedMovie: null,
    loading: false,
    error: null,
  },
  reducers: {
    FETCH_MOVIES_REQUEST: (state) => {
      state.loading = true;
      state.error = null;
    },
    FETCH_MOVIES_SUCCESS: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    // Add other reducers for search and movie details
  },
});

export default moviesSlice.reducer;