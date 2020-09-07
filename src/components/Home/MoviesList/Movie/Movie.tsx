import React, { useState } from 'react';
import { MovieActionModal } from './MovieActionModal';
import { DeleteMovieModal } from './DeleteMovieModal';
import styles from './Movie.module.scss';
import { EditMovieModal } from './EditMovieModal';

export interface Item {
  id: string;
  img: string;
  title: string;
  genre: string;
  releaseDate: string;
  url: string;
  overview: string;
  runtime: string;
}

type Props = {
  movie: Item;
};

export const Movie: React.FC<Props> = (props) => {
  const { movie } = props;
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  return (
    <div className={styles.root}>
      <img className={styles.img} src={movie.img} alt="Not exists" />
      <div className={styles.contentContainer}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.year}>{movie.releaseDate}</div>
      </div>
      <div className={styles.genre}>{movie.genre}</div>
      <MovieActionModal
        classes={{
          roundButtonRoot: styles.movieActionModalRoundButtonRoot,
        }}
        onEditClick={() => setEditModalVisible(true)}
        onDeleteClick={() => setDeleteModalVisible(true)}
      />
      <DeleteMovieModal
        open={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onDelete={() => alert(`${movie.id} was deleted!`)}
      />
      <EditMovieModal open={editModalVisible} movie={movie} onClose={() => setEditModalVisible(false)} />
    </div>
  );
};
