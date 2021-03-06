import React, { useCallback } from 'react';
import { Modal } from '../shared/Modal';
import { useRemoveMovie } from './useRemoveMovie';
import styles from './RemoveMovie.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
  id: number;
};

export const RemoveMovie: React.FC<Props> = (props) => {
  const { open, onClose: handleClose, id } = props;
  const { removeMovie } = useRemoveMovie();
  const handleDeleteClick = useCallback(() => {
    removeMovie(id);
    handleClose();
  }, [handleClose, id, removeMovie]);

  return (
    <Modal open={open}>
      <div className={styles.content}>
        <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Delete Movie</h2>
        <p className={styles.contentBody}>Are you sure you want to delete this movie?</p>
        <button className={styles.buttonConfirm} onClick={handleDeleteClick}>
          Confirm
        </button>
      </div>
    </Modal>
  );
};
