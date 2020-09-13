import classnames from 'classnames';
import React, { useCallback, useState } from 'react';
import { Movie } from '../../../../models/movie';
import { Input, InputType } from '../../../shared/Input';
import { Modal } from '../../../shared/Modal';
import { SelectWithTitle } from '../../../shared/select';
import styles from './UpdateMovieModal.module.scss';
import { useUpdateMovieModal } from './useUpdateMovieModal';

type Props = {
  open: boolean;
  movie: Movie;
  onClose: () => void;
};

export const UpdateMovieModal: React.FC<Props> = (props) => {
  const { open, movie, onClose: handleClose } = props;
  const [cloneMovie, setCloneMovie] = useState<Movie>({ ...movie });
  const { updateMovie } = useUpdateMovieModal();

  const resetCloneMovie = useCallback(() => setCloneMovie({ ...movie }), [movie]);
  const saveCloneMovie = useCallback(() => {
    updateMovie(cloneMovie);
    handleClose();
  }, [cloneMovie, updateMovie, handleClose]);

  return (
    <Modal open={open}>
      <div className={styles.content}>
        <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Edit Movie</h2>
        <div className={styles.inputs}>
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie Id"
            readOnly
            value={cloneMovie.id + ''}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                id: Number(e.target.value),
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Title"
            value={cloneMovie.title}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                title: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            type={InputType.Date}
            title="Release Date"
            value={cloneMovie.release_date}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                release_date: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie Preview"
            value={cloneMovie.poster_path}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                poster_path: e.target.value,
              })
            }
          />
          <SelectWithTitle
            classes={{ root: styles.inputRoot, selectRoot: styles.selectInput }}
            title="Gende"
            value={cloneMovie.genres}
            multiple
            options={[
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
              { value: 'baz', label: 'Baz' },
            ]}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                genres: Array.from(e.target.selectedOptions).map((o) => o.value),
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Overview"
            value={cloneMovie.overview}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                overview: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: classnames(styles.inputRoot, styles.lastInputRoot) }}
            title="Runtime"
            type={InputType.Number}
            value={cloneMovie.runtime + ''}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                runtime: Number(e.target.value),
              })
            }
          />
          <div className={styles.buttonsContainer}>
            <button className={styles.buttonReset} onClick={resetCloneMovie}>
              Reset
            </button>
            <button className={styles.buttonSave} onClick={saveCloneMovie}>
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
