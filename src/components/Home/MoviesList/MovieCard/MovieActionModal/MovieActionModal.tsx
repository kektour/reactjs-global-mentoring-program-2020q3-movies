import React, { useCallback, useEffect, useRef } from 'react';
import { RoundButton } from '../../../../shared/RoundButton';
import { useModal } from '../../../../../hooks/useModal';
import styles from './MovieActionModal.module.scss';

type Props = {
  classes?: {
    roundButtonRoot?: string;
  };
  onDeleteClick: () => void;
  onEditClick: () => void;
};

export const MovieActionModal: React.FC<Props> = (props) => {
  const { classes = {}, onDeleteClick: handelDeleteClick, onEditClick: handleEditClick } = props;
  const modal = useModal();
  const rootRef = useRef<HTMLDivElement>(null);

  const clickOutsideListener = useCallback(
    (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        modal.close();
      }
    },
    [modal, rootRef]
  );

  const handleCloseModalOnEdit = useCallback(() => {
    handleEditClick();
    modal.close();
  }, [modal, handleEditClick]);

  const handleCloseModalOnDelete = useCallback(() => {
    handelDeleteClick();
    modal.close();
  }, [modal, handelDeleteClick]);

  useEffect(() => {
    document.addEventListener('click', clickOutsideListener);
    return () => {
      document.removeEventListener('click', clickOutsideListener);
    };
  }, [clickOutsideListener]);

  return (
    <div ref={rootRef}>
      <RoundButton
        classes={{
          root: classes.roundButtonRoot,
        }}
        onClick={modal.open}
      />
      {modal.isOpen && (
        <div className={styles.modal}>
          <div className={styles.closeContainer}>
            <button className={styles.crossButton} onClick={modal.close}></button>
          </div>
          <button className={styles.editButton} onClick={handleCloseModalOnEdit}>
            Edit
          </button>
          <button className={styles.deleteButton} onClick={handleCloseModalOnDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
