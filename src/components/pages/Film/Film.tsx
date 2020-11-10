import { useRouter } from 'next/router';
import React from 'react';
import { Movie } from '../../../models/movie';
import { FilterSort } from '../../FilterSort';
import { MoviesList } from '../../MoviesList';
import { Footer } from '../../shared/Footer';
import { MovieDetails } from './MovieDetails';

import styles from './Film.module.scss';

type Props = {
  movies: Array<Movie>;
  count: number;
};

export const Film: React.FC<Props> = ({ movies, count }) => {
  const router = useRouter();
  const movieId = router.query['id'] as string | undefined;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {movieId && <MovieDetails movieId={movieId} />}
        <div className={styles.line}></div>
        <FilterSort />
        <MoviesList movies={movies} count={count} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
