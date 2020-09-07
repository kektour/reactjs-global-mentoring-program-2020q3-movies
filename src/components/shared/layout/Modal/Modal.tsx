import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import styles from './Modal.module.scss';

type Props = {
  open: boolean;
  children: React.ReactNode;
  classes?: {
    root?: string;
  };
};

export const Modal: React.FC<Props> = (props) => {
  const { open, children, classes = {} } = props;
  const body = useMemo(() => document.querySelector('body') as HTMLBodyElement, []);
  useMemo(() => {
    if (open) {
      body.classList.add(styles.bodyOpen);
    } else {
      body.classList.remove(styles.bodyOpen);
    }
  }, [open]);

  return (
    (open && (
      <React.Fragment>
        {ReactDOM.createPortal(<div className={classnames(styles.root, classes.root)}>{children}</div>, body)}
      </React.Fragment>
    )) ||
    null
  );
};
