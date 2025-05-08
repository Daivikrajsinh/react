import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from "../../redux/thunks/movieThunks.js";
import { Form, Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { searchResults, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        dispatch(searchMovies(query));
      } else {
        dispatch({ type: 'CLEAR_SEARCH_RESULTS' });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Search Movies</h2>
      
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="lg"
        />
      </Form.Group>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}

      {error && (
        <Alert variant="danger">
          Error searching movies: {error}
        </Alert>
      )}

      {searchResults.length > 0 && (
        <>
          <h4 className="mb-3">Search Results</h4>
          <Row xs={1} md={2} lg={4} className="g-4">
            {searchResults.map(movie => (
              <Col key={movie.id}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={movie.poster_path 
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : '/placeholder-movie.png'}
                    alt={movie.title}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                      <span className="text-muted">
                        Rating: {movie.vote_average}/10
                      </span>
                    </Card.Text>
                    <Link 
                      to={`/movies/${movie.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {query && !loading && searchResults.length === 0 && (
        <Alert variant="info">
          No movies found matching "{query}"
        </Alert>
      )}
    </Container>
  );
};

export default MovieSearch;