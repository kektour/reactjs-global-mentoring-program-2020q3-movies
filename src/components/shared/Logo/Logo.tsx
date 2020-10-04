import React from 'react';
import classnames from 'classnames';
import styles from './Logo.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
};

// TODO: Add link to /
export const Logo: React.FC<Props> = (props) => {
  const { classes = {} } = props;
  return (
    <p className={classnames(styles.root, classes.root)}>
      <span>netflix</span>roulette
    </p>
  );
};
