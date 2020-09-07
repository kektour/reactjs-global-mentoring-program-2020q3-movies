import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CrossButton } from '../../../../shared/layout/Buttons/CrossButton';
import { RoundButton } from '../../../../shared/layout/Buttons/RoundButton';
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
  const [modalVisible, setModalVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const clickOutsideListener = useCallback(
    (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setModalVisible(false);
      }
    },
    [rootRef]
  );

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleCloseModalOnEdit = useCallback(() => {
    handleEditClick();
    setModalVisible(false);
  }, [handleEditClick]);

  const handleCloseModalOnDelete = useCallback(() => {
    handelDeleteClick();
    setModalVisible(false);
  }, [handelDeleteClick]);

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
        onClick={handleOpenModal}
      />
      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.closeContainer}>
            <CrossButton onClick={handleCloseModal} />
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
