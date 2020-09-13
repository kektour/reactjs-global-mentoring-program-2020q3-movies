import React, { useCallback, useMemo } from 'react';
import { useModal } from '../../../../hooks/useModal';
import { Movie } from '../../../../models/movie';
import { RemoveMovieModal } from '../../modals/RemoveMovieModal';
import { UpdateMovieModal } from '../../modals/UpdateMovieModal';
import { MovieActionModal } from './MovieActionModal';
import styles from './MovieCard.module.scss';

type Props = {
  movie: Movie;
  onSelectMovie: (m: Movie) => void;
};

export const MovieCard: React.FC<Props> = (props) => {
  const { movie, onSelectMovie: handleSelectMovie } = props;
  const deleteMovieModal = useModal();
  const updateMovieModal = useModal();
  const handleRootDivClick = useCallback(() => handleSelectMovie(movie), [movie, handleSelectMovie]);
  const genresAsString = useMemo(() => movie.genres.join(', '), [movie]);

  return (
    <div className={styles.root}>
      <div className={styles.movieContent} onClick={handleRootDivClick}>
        <img className={styles.img} src={movie.poster_path} alt="Not Found" />
        <div className={styles.contentContainer}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.year}>{movie.release_date}</div>
        </div>
        <div className={styles.genre}>{genresAsString}</div>
      </div>
      <MovieActionModal
        classes={{
          roundButtonRoot: styles.movieActionModalRoundButtonRoot,
        }}
        onEditClick={updateMovieModal.open}
        onDeleteClick={deleteMovieModal.open}
      />
      <RemoveMovieModal open={deleteMovieModal.isOpen} onClose={deleteMovieModal.close} id={movie.id} />
      <UpdateMovieModal open={updateMovieModal.isOpen} movie={movie} onClose={updateMovieModal.close} />
    </div>
  );
};
