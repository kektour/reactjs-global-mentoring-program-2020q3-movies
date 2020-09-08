import React, { useState, useCallback } from 'react';
import { Footer } from '../shared/Footer';
import { FilterSort } from './FilterSort';
import { MoviesList } from './MoviesList';
import { Showcase } from './Showcase';
import { MovieDetails } from './MovieDetails';
import styles from './Home.module.scss';
import { Movie } from '../../models/movie';

type Props = {};

export const Home: React.FC<Props> = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const handleSelectMovie = useCallback((m: Movie) => setSelectedMovie(m), []);
  const handleResetMovie = useCallback(() => setSelectedMovie(undefined), []);

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {selectedMovie ? <MovieDetails movie={selectedMovie} onCloseClick={handleResetMovie}/> : <Showcase />}
        <div className={styles.line}></div>
        <FilterSort />
        <MoviesList onSelectMovie={handleSelectMovie} />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
