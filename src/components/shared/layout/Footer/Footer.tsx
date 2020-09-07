import React from 'react';
import classnames from 'classnames';
import { Logo } from '../Logo';
import styles from './Footer.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
};

export const Footer: React.FC<Props> = (props) => {
  const { classes = {} } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <Logo classes={{ root: styles.logoRoot }} />
    </div>
  );
};
