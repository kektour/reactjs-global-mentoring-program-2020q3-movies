import React from 'react';
import { Footer } from '../../shared/Footer';
import { FilterSort } from '../../FilterSort';
import { Showcase } from './Showcase';

import styles from './Home.module.scss';

export const Home: React.FC<{}> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Showcase />
        <div className={styles.line}></div>
        <FilterSort />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
