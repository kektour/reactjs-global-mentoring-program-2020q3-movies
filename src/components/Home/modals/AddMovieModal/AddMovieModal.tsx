import React, { useState } from 'react';
import { Modal } from '../../../shared/Modal';
import { Input, InputType } from '../../../shared/Input';
import classnames from 'classnames';
import styles from './AddMovieModal.module.scss';
import { SelectWithTitle } from '../../../shared/select';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const AddMovieModal: React.FC<Props> = (props) => {
  const { open, onClose: handleClose } = props;
  const [cloneMovie, setCloneMovie] = useState({
    img: '',
    title: '',
    genre: '',
    releaseDate: new Date().toISOString().split('T')[0],
    url: '',
    overview: '',
    runtime: '',
  });

  return (
    <Modal open={open}>
      <div className={styles.content}>
        <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Add Movie</h2>
        <div className={styles.inputs}>
          <Input
            classes={{ root: styles.inputRoot }}
            title="Title"
            value={cloneMovie.title}
            placeholder="Title here"
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
            placeholder="Release Date here"
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
            placeholder="Movie Preview here"
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
            placeholder="Movie URL here"
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
            placeholder="Overview here"
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
            placeholder="Runtime here"
            value={cloneMovie.runtime}
            onChange={(e) =>
              setCloneMovie({
                ...cloneMovie,
                runtime: e.target.value,
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
