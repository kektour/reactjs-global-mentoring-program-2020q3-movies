import React from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from '../shared/Footer';
import { FilterSort } from './FilterSort';
import { MovieDetails } from './MovieDetails';
import { MoviesList } from './MoviesList';
import { Showcase } from './Showcase';

import styles from './Home.module.scss';

export const Home: React.FC<{}> = () => {
  const { id: movieId } = useParams<{ id: string }>();
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {movieId ? <MovieDetails movieId={movieId} /> : <Showcase />}
        <div className={styles.line}></div>
        <FilterSort />
        <MoviesList />
        {/* <NotFoundMovie /> */}
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
