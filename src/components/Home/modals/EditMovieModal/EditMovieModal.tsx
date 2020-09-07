import React, { useState } from 'react';
import classnames from 'classnames';
import { Input, InputType } from '../../../shared/Input';
import { SelectWithTitle } from '../../../shared/select';
import { Modal } from '../../../shared/Modal';
import { Movie } from '../../../../models/movie';
import styles from './EditMovieModal.module.scss';

type Props = {
  open: boolean;
  movie: Movie;
  onClose: () => void;
};

export const EditMovieModal: React.FC<Props> = (props) => {
  const { open, movie, onClose: handleClose } = props;
  const [cloneMovie, setCloneMovie] = useState(movie);

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
            value={cloneMovie.id}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                id: e.target.value,
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
            value={cloneMovie.releaseDate}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                releaseDate: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie Preview"
            value={cloneMovie.img}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                url: e.target.value,
              })
            }
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie URL"
            value={cloneMovie.url}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                url: e.target.value,
              })
            }
          />
          <SelectWithTitle
            classes={{ root: styles.inputRoot }}
            title="Gende"
            value={cloneMovie.genre}
            options={[
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
              { value: 'baz', label: 'Baz' },
            ]}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                genre: e.target.value,
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
            <button className={styles.buttonReset}>Reset</button>
            <button className={styles.buttonSave}>Save</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
