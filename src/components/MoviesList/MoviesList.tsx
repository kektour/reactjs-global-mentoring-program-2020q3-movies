import React from 'react';
import { Movie } from '../../models/movie';
import { MovieCard } from './MovieCard';
// import { useMoviesList } from './useMoviesList';
import { NotFoundMovie } from './NotFoundMovie';

import styles from './MoviesList.module.scss';

type Props = {
  movies: Array<Movie>;
  count: number;
};

export const MoviesList: React.FC<Props> = ({ movies, count }) => {
  // const moviesList = useMoviesList();

  return count ? (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.moviesCount}>
          <span>{count}&nbsp;</span>movies found
        </p>
        <div className={styles.moviesContainer}>
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <NotFoundMovie />
  );
};
