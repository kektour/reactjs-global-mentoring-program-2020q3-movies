import React, { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '../../../hooks/useModal';
import { Movie } from '../../../models/movie';
import { RemoveMovie } from '../../RemoveMovie';
import { UpdateMovie } from '../../UpdateMovie';
import { MovieActionModal } from './MovieActionModal';

import styles from './MovieCard.module.scss';

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = (props) => {
  const { movie } = props;
  const router = useRouter();
  const deleteMovieModal = useModal();
  const updateMovieModal = useModal();
  const handleRootDivClick = useCallback(() => {
    if (router.query['query']) {
      router.push({ pathname: `/films/${movie.id}`, query: { search: router.query['query'] } });
    } else if (router.query['search']) {
      router.push({ pathname: `/films/${movie.id}`, query: { search: router.query['search'] } });
    } else {
      router.push(`/films/${movie.id}`);
    }
  }, [movie, router.query]);
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
      <RemoveMovie open={deleteMovieModal.isOpen} onClose={deleteMovieModal.close} id={movie.id} />
      <UpdateMovie open={updateMovieModal.isOpen} movie={movie} onClose={updateMovieModal.close} />
    </div>
  );
};
