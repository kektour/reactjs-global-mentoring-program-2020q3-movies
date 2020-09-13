import React, { useMemo, useEffect } from 'react';
import { Header } from '../../shared/Header';
import { Movie } from '../../../models/movie';
import styles from './MovieDetails.module.scss';

type Props = {
  movie: Movie;
  onCloseClick: () => void;
};

const isBetween = (x: number, min: number, max: number) => x >= min && x <= max;

export const MovieDetails: React.FC<Props> = (props) => {
  const { movie, onCloseClick: handleCloseClick } = props;
  const movieYear = useMemo(() => movie.release_date.substring(0, 4), [movie]);
  const ratingColor = useMemo(() => {
    // TODO: upgrade to 10
    const piece = 5 / 3;
    if (isBetween(movie.vote_average, 0, piece)) {
      return 'red';
    }
    if (isBetween(movie.vote_average, piece, piece * 2)) {
      return 'yellow';
    }
    return 'green';
  }, [movie]);
  useEffect(() => window.scrollTo(0, 0), [movie]);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header>
            <button type="button" className={styles.goBackButton} onClick={handleCloseClick}>
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
      </div>
    </div>
  );
};
