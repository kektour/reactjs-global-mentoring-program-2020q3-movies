import React, { useState } from 'react';
import classnames from 'classnames';
import { Button } from '../../../../shared/layout/Buttons/Button';
import { CrossButton } from '../../../../shared/layout/Buttons/CrossButton';
import { Input, InputType } from '../../../../shared/layout/Input';
import { SelectWithTitle } from '../../../../shared/layout/SelectWithTitle';
import { Modal } from '../../../../shared/Modal';
import { Item as Movie } from '../Movie';
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
        <CrossButton classes={{ root: styles.crossButtonRoot }} onClick={handleClose} />
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
            value={cloneMovie.runtime}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                runtime: e.target.value,
              })
            }
          />
          <div className={styles.buttonsContainer}>
            <Button classes={{ root: classnames(styles.buttonResetRoot) }} onClick={() => null}>
              Reset
            </Button>
            <Button classes={{ root: classnames(styles.buttonSaveRoot) }} onClick={() => null}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
