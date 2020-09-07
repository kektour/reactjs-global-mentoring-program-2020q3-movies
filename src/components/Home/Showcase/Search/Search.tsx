import React from 'react';
import styles from './Search.module.scss';

type Props = {};

export const Search: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <input className={styles.field} type="text" placeholder="What do you want to watch?" />
      <button className={styles.button}>Search</button>
    </div>
  );
};
