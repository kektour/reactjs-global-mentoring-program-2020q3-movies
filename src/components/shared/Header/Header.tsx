import React from 'react';
import classnames from 'classnames';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
};

export const Header: React.FC<Props> = (props) => {
  const { classes = {}, children } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <Logo />
      {children}
    </div>
  );
};
