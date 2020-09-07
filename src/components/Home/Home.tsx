import React, { useState, useCallback } from 'react';
import { Footer } from '../shared/layout/Footer';
import { FilterSort } from './FilterSort';
import { MoviesList } from './MoviesList';
import { Showcase } from './Showcase';
import { AddMovieModal } from './AddMovieModal';
import styles from './Home.module.scss';

type Props = {};

export const Home: React.FC<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);
  const handleOpenModal = useCallback(() => {
    setModalOpen(true);
  }, []);
  return (
    <React.Fragment>
      <AddMovieModal open={modalOpen} onClose={handleCloseModal} />
      <div className={styles.root}>
        <div className={styles.content}>
          <Showcase onModalOpen={handleOpenModal} />
          <div className={styles.line}></div>
          <FilterSort />
          <MoviesList />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};
