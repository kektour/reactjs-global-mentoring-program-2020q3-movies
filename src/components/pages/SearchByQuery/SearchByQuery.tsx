import React from 'react';
import { Movie } from '../../../models/movie';
import { FilterSort } from '../../FilterSort';
import { MoviesList } from '../../MoviesList';
import { Footer } from '../../shared/Footer';
import { Showcase } from '../Home/Showcase';

import styles from './SearchByQuery.module.scss';

type Props = {
  movies: Array<Movie>;
  count: number;
};

export const SearchByQuery: React.FC<Props> = ({ movies, count }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Showcase />
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
