import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

type Props = {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classes?: {
    root?: string;
  };
};

export const Button: React.FC<Props> = (props) => {
  const { children, onClick: handleClick, classes = {} } = props;
  return (
    <button className={classnames(styles.root, classes.root)} onClick={handleClick}>
      {children}
    </button>
  );
};
