import React, { useCallback } from 'react';
import { Modal } from '../../../shared/Modal';
import styles from './DeleteMovieModal.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export const DeleteMovieModal: React.FC<Props> = (props) => {
  const { open, onClose: handleClose, onDelete: handleDelete } = props;
  const handleDeleteClick = useCallback(() => {
    handleDelete();
    handleClose();
  }, [handleDelete, handleClose]);

  return (
    <Modal open={open}>
      <div className={styles.content}>
      <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Delete Movie</h2>
        <p className={styles.contentBody}>Are you sure you want to delete this movie?</p>
        <button className={styles.buttonConfirm} onClick={handleDeleteClick}>Confirm</button>
      </div>
    </Modal>
  );
};
