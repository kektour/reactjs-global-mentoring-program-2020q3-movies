import React from 'react';
import { MovieCard } from './MovieCard';
import { useMoviesList } from './useMoviesList';
import { NotFoundMovie } from '../NotFoundMovie';
import styles from './MoviesList.module.scss';

export const MoviesList: React.FC<{}> = () => {
  const moviesList = useMoviesList();

  return moviesList.count ? (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.moviesCount}>
          <span>{moviesList.count}&nbsp;</span>movies found
        </p>
        <div className={styles.moviesContainer}>
          {moviesList.movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMovie />
  );
};
