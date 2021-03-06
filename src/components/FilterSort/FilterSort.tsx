import React from 'react';
import { Filter } from './Filter';
import { Sort } from './Sort';
import styles from './FilterSort.module.scss';

export const FilterSort: React.FC<{}> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.controls}>
          <Filter />
          <Sort />
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};
