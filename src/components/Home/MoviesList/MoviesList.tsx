import React from 'react';
import { Movie } from '../../../models/movie';
import { MovieCard } from './MovieCard';
import { useMoviesList } from './useMoviesList';
import styles from './MoviesList.module.scss';

type Props = {
  onSelectMovie: (m: Movie) => void;
};

export const MoviesList: React.FC<Props> = (props) => {
  const { onSelectMovie: handleSelectMovie } = props;
  const moviesList = useMoviesList();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.moviesCount}>
          <span>{moviesList.count}&nbsp;</span>movies found
        </p>
        <div className={styles.moviesContainer}>
          {moviesList.movies.map((m) => (
            <MovieCard key={m.id} movie={m} onSelectMovie={handleSelectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};
