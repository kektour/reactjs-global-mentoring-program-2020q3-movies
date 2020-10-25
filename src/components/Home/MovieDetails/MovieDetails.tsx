import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getColorByRating } from '../../../helpers/common';
import { Movie } from '../../../models/movie';
import { Header } from '../../shared/Header';
import styles from './MovieDetails.module.scss';
import { useMovieDetailts } from './useMovieDetailts';

type Props = {
  movieId: string;
};

export const MovieDetails: React.FC<Props> = ({ movieId }) => {
  const history = useHistory();
  const movieDetailts = useMovieDetailts();
  const [movie, setMovie] = useState<Movie | undefined>();

  useEffect(() => {
    axios
      .get<Movie>(`http://localhost:4000/movies/${movieId}`)
      .then((res) => setMovie(res.data))
      .catch(() => history.push('/'));
  }, [movieId, history]);

  useEffect(() => movie && window.scrollTo(0, 0), [movie]);

  const movieYear = useMemo(() => movie?.release_date.substring(0, 4), [movie]);
  const ratingColor = useMemo(() => (movie ? getColorByRating(movie.vote_average) : undefined), [movie]);

  const goHandleGoBack = useCallback(() => {
    movieDetailts.resetFilter();
    history.push('/');
  }, [history, movieDetailts]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {!movie ? null : (
          <React.Fragment>
            <div className={styles.header}>
              <Header>
                <button className={styles.goBackButton} onClick={goHandleGoBack}>
                  <i className="fa fa-search"></i>
                </button>
              </Header>
            </div>
            <div className={styles.body}>
              <img className={styles.image} src={movie.poster_path} alt="Not Found" />
              <div className={styles.info}>
                <div className={styles.titleNRating}>
                  <h1 className={styles.title}>{movie.title}</h1>
                  <div className={styles.rating} style={{ color: ratingColor }}>
                    {movie.vote_average}
                  </div>
                </div>
                {!!movie.tagline && <div className={styles.note}>{movie.tagline}</div>}
                <div className={styles.releaseDateNRuntime}>
                  <div className={styles.releaseDate}>{movieYear}</div>
                  {movie.runtime} min
                </div>
                <div className={styles.overview}>{movie.overview}</div>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
