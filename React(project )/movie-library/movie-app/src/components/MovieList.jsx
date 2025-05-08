import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularMovies } from '../../redux/thunks/movieThunks';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="mt-3">
        Error loading movies: {error}
      </Alert>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Popular Movies</h2>
      <Row xs={1} md={2} lg={4} className="g-4">
        {movies.map(movie => (
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
    </Container>
  );
};

export default MovieList;