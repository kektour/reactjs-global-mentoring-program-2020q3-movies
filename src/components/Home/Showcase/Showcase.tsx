import React from 'react';
import { useModal } from '../../../hooks/useModal';
import { Header } from '../../shared/Header';
import { AddMovieModal } from '../modals/AddMovieModal';
import { Search } from './Search';
import styles from './Showcase.module.scss';

type Props = {};

export const Showcase: React.FC<Props> = () => {
  const addMovieModal = useModal();
  return (
    <React.Fragment>
      <AddMovieModal open={addMovieModal.isOpen} onClose={addMovieModal.close} />
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header>
              <button className={styles.button} onClick={addMovieModal.open}>
                + Add Movie
              </button>
            </Header>
          </div>
          <div className={styles.content}>
            <h1 className={styles.contentTitle}>Find Your Movie</h1>
            <Search />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
