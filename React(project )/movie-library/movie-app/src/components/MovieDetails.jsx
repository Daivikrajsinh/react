import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../redux/thunks/movieThunks';
import { Container, Row, Col, Card, Spinner, Alert, Badge, ListGroup } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie: movie, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    return () => {
      // Clean up when component unmounts
      dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: null });
    };
  }, [dispatch, id]);

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
        Error loading movie details: {error}
      </Alert>
    );
  }

  if (!movie) return null;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : '/placeholder-movie.png'}
              alt={movie.title}
            />
          </Card>
        </Col>
        <Col md={8}>
          <h1>{movie.title} <small className="text-muted">({new Date(movie.release_date).getFullYear()})</small></h1>
          
          <div className="mb-3">
            {movie.genres.map(genre => (
              <Badge key={genre.id} bg="secondary" className="me-2">
                {genre.name}
              </Badge>
            ))}
          </div>
          
          <p className="lead">{movie.tagline}</p>
          
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          
          <Row className="mb-4">
            <Col>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </Col>
            <Col>
              <strong>Rating:</strong> {movie.vote_average}/10 ({movie.vote_count} votes)
            </Col>
          </Row>
          
          <h4>Cast</h4>
          <ListGroup horizontal className="mb-4 flex-wrap">
            {movie.credits.cast.slice(0, 10).map(actor => (
              <ListGroup.Item key={actor.id} className="mb-2 me-2">
                <strong>{actor.name}</strong> as {actor.character}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;