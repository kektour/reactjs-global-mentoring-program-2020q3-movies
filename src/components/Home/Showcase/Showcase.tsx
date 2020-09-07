import React from 'react';
import { Header } from '../../shared/layout/Header';
import { Search } from './Search';
import styles from './Showcase.module.scss';

type Props = {
  onModalOpen: () => void;
};

export const Showcase: React.FC<Props> = (props) => {
  const { onModalOpen: handleModalOpen } = props;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Header onButtonClick={handleModalOpen} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Find Your Movie</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};
