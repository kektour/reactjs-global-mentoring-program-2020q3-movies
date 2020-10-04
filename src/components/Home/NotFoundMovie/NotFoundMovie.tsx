import React from 'react';
import styles from './NotFoundMovie.module.scss';

export const NotFoundMovie: React.FC<{}> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1 className={styles.title}>No movie found</h1>
      </div>
    </div>
  );
};
