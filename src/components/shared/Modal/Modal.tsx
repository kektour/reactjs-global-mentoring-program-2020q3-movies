import React, { useMemo } from 'react';
import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';
import { Modal as CoreModal } from '../layout/Modal';
import styles from './Modal.module.scss';

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = (props) => {
  const { open, children } = props;
  const root = useMemo(() => document.querySelector('#root') as HTMLDivElement, []);
  useMemo(() => {
    if (open) {
      root.classList.add(styles.rootOpen);
    } else {
      root.classList.remove(styles.rootOpen);
    }
  }, [open]);

  return (
    <CoreModal open={open} classes={{ root: styles.coreModalRoot }}>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Header />
          </div>
          {children}
        </div>
        <Footer classes={{ root: styles.footerRoot }} />
      </div>
    </CoreModal>
  );
};
