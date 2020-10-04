import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { Header } from '../../shared/Header';
import { AddMovie } from '../../AddMovie';
import { Search } from './Search';
import styles from './Showcase.module.scss';

export const Showcase: React.FC<{}> = () => {
  const addMovieModal = useModal();
  return (
    <React.Fragment>
      <AddMovie open={addMovieModal.isOpen} onClose={addMovieModal.close} />
      <div className={styles.root}>
        <Header classes={{ root: styles.header }}>
          <button className={styles.button} onClick={addMovieModal.open}>
            + Add Movie
          </button>
        </Header>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.contentTitle}>Find Your Movie</h1>
            <Search />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
