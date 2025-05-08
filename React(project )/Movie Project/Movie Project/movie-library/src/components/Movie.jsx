import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Movie = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('popularity.desc'); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };    

  const handleSearchClick = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      console.log('Searching for:', searchQuery);
      const response = await axios.get(
        'https://api.themoviedb.org/3/search/movie',
        {
          params: {
            api_key: '', 
            query: searchQuery,
            sort_by: sortBy
          }
        }
      );
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSortChange = (e) => { 
    setSortBy(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">Movie House</h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
          <div className="relative w-full max-w-md">
            <input 
              type="text" 
              placeholder="Search Movies..." 
              value={searchQuery}  
              onChange={handleSearchChange} 
              onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
              className="w-full py-3 px-4 pr-12 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button 
              onClick={handleSearchClick} 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-white focus:outline-none"
            >
              <AiOutlineSearch className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-by">Sort By:</label>
            <select 
              id="sort-by" 
              value={sortBy} 
              onChange={handleSortChange}
              className="bg-gray-800 text-white p-2 rounded"
            >
              <option value="popularity.desc">Popularity Descending</option>
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="vote_average.desc">Rating Descending</option>
              <option value="vote_average.asc">Rating Ascending</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
            </select>
          </div>
        </div>

        {/* Movie results section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map(movie => (
            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden">
              {movie.poster_path && (
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg">{movie.title}</h3>
                <p className="text-gray-400">{movie.release_date}</p>
                <p className="text-yellow-400">★ {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;