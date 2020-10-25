import React from 'react';
import { FilterSort } from '../../FilterSort';
import { MoviesList } from '../../MoviesList';
import { Footer } from '../../shared/Footer';
import { Showcase } from '../Home/Showcase';

import styles from './SearchByQuery.module.scss';

export const SearchByQuery: React.FC<{}> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Showcase />
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
