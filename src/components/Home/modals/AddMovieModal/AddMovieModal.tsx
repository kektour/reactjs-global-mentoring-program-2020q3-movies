import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import { NewMovie } from '../../../../models/movie';
import { Input, InputType } from '../../../shared/Input';
import { Modal } from '../../../shared/Modal';
import { SelectWithTitle } from '../../../shared/select';
import styles from './AddMovieModal.module.scss';
import { useAddMovieModal } from './useAddMovieModal';

type Props = {
  open: boolean;
  onClose: () => void;
};

const defaultMovie: NewMovie = {
  title: '',
  tagline: 'tagline',
  vote_average: 0,
  vote_count: 0,
  release_date: new Date().toISOString().split('T')[0],
  poster_path: 'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
  overview: '',
  budget: 0,
  revenue: 0,
  genres: [],
  runtime: 0,
};

export const AddMovieModal: React.FC<Props> = (props) => {
  const { open, onClose: handleClose } = props;
  const [newMovie, setNewMovie] = useState<NewMovie>({ ...defaultMovie });
  const { createMovie } = useAddMovieModal();

  const resetCloneMovie = useCallback(() => setNewMovie({ ...defaultMovie }), []);
  const saveCreatedMovie = useCallback(() => {
    createMovie(newMovie);
    handleClose();
  }, [newMovie, createMovie, handleClose]);

  return (
    <Modal open={open}>
      <div className={styles.content}>
        <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Add Movie</h2>
        <div className={styles.inputs}>
          <Input
            classes={{ root: styles.inputRoot }}
            title="Title"
            value={newMovie.title}
            placeholder="Title here"
            onChange={(e) =>
              setNewMovie({
                ...newMovie,
                title: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            type={InputType.Date}
            title="Release Date"
            value={newMovie.release_date}
            placeholder="Release Date here"
            onChange={(e) =>
              setNewMovie({
                ...newMovie,
                release_date: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie Preview"
            placeholder="Movie Preview here"
            value={newMovie.poster_path}
            onChange={(e) =>
              setNewMovie({
                ...newMovie,
                poster_path: e.target.value,
              })
            }
          />
          <SelectWithTitle
            classes={{ root: styles.inputRoot }}
            title="Gende"
            value={newMovie.genres}
            multiple
            options={[
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
              { value: 'baz', label: 'Baz' },
            ]}
            onChange={(e) =>
              setNewMovie({
                ...newMovie,
                genres: Array.from(e.target.selectedOptions).map((o) => o.value),
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Overview"
            placeholder="Overview here"
            value={newMovie.overview}
            onChange={(e) =>
              setNewMovie({
                ...newMovie,
                overview: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: classnames(styles.inputRoot, styles.lastInputRoot) }}
            title="Runtime"
            placeholder="Runtime here"
            value={newMovie.runtime + ''}
            onChange={(e) =>
              setNewMovie({
                ...newMovie,
                runtime: Number(e.target.value),
              })
            }
          />
          <div className={styles.buttonsContainer}>
            <button className={styles.buttonReset} onClick={resetCloneMovie}>
              Reset
            </button>
            <button className={styles.buttonSave} onClick={saveCreatedMovie}>
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
