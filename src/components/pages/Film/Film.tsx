import React from 'react';
import { Footer } from '../../shared/Footer';
import { FilterSort } from '../../FilterSort';
import { MovieDetails } from './MovieDetails';
import { MoviesList } from '../../MoviesList';
import { useRouter } from 'next/router';

import styles from './Film.module.scss';

export const Film: React.FC<{}> = () => {
  const router = useRouter();
  const movieId = router.query['id'] as string | undefined;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {movieId && <MovieDetails movieId={movieId} />}
        <div className={styles.line}></div>
        <FilterSort />
        <MoviesList />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
