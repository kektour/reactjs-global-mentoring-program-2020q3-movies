import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Modal.module.scss';

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = (props) => {
  const { open, children } = props;
  const body = document.querySelector('body') as HTMLBodyElement;
  const root = document.querySelector('#root') as HTMLDivElement;
  useMemo(() => {
    if (open) {
      body.classList.add(styles.bodyOpen);
      root.classList.add(styles.rootOpen);
    } else {
      body.classList.remove(styles.bodyOpen);
      root.classList.remove(styles.rootOpen);
    }
  }, [open, body, root]);

  return (
    (open && (
      <React.Fragment>
        {ReactDOM.createPortal(
          <div className={styles.root}>
            <Header classes={{ root: styles.header }} />
            <div className={styles.container}>
              {children}
            </div>
            <Footer classes={{ root: styles.footerRoot }} />
          </div>,
          body
        )}
      </React.Fragment>
    )) ||
    null
  );
};
