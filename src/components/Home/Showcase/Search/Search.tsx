import React from 'react';
import { Button } from '../../../shared/layout/Buttons/Button';
import styles from './Search.module.scss';

type Props = {};

export const Search: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <input className={styles.field} type="text" placeholder="What do you want to watch?" />
      <Button classes={{ root: styles.buttonRoot }} onClick={() => null} >Search</Button>
    </div>
  );
};
