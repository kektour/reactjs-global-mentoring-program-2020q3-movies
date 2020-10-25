import React, { useEffect, useMemo } from 'react';
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
  let body: HTMLBodyElement;
  let root: HTMLDivElement;

  if (typeof window !== 'undefined') {
    body = document.querySelector('body') as HTMLBodyElement;
    root = document.querySelector('#__next') as HTMLDivElement;
  }

  useMemo(() => {
    if (body && root) {
      if (open) {
        body.classList.add(styles.bodyOpen);
        root.classList.add(styles.rootOpen);
      } else {
        body.classList.remove(styles.bodyOpen);
        root.classList.remove(styles.rootOpen);
      }
    }
  }, [open, body, root]);

  return (
    (open && (
      <React.Fragment>
        {body
          ? ReactDOM.createPortal(
              <div className={styles.root}>
                <Header classes={{ root: styles.header }} />
                <div className={styles.container}>{children}</div>
                <Footer classes={{ root: styles.footerRoot }} />
              </div>,
              body
            )
          : null}
      </React.Fragment>
    )) ||
    null
  );
};
