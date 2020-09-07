import React, { useCallback } from 'react';
import { useModal } from '../../../../hooks/useModal';
import { Movie } from '../../../../models/movie';
import { DeleteMovieModal } from '../../modals/DeleteMovieModal';
import { EditMovieModal } from '../../modals/EditMovieModal';
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

  return (
    <div className={styles.root} onClick={handleRootDivClick}>
      <img className={styles.img} src={movie.img} alt="Not Found" />
      <div className={styles.contentContainer}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.year}>{movie.releaseDate}</div>
      </div>
      <div className={styles.genre}>{movie.genre}</div>
      <MovieActionModal
        classes={{
          roundButtonRoot: styles.movieActionModalRoundButtonRoot,
        }}
        onEditClick={updateMovieModal.open}
        onDeleteClick={deleteMovieModal.open}
      />
      <DeleteMovieModal
        open={deleteMovieModal.isOpen}
        onClose={deleteMovieModal.close}
        onDelete={() => alert(`${movie.id} was deleted!`)}
      />
      <EditMovieModal open={updateMovieModal.isOpen} movie={movie} onClose={updateMovieModal.close} />
    </div>
  );
};
