import React from 'react';
import classnames from 'classnames';
import styles from './RoundButton.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const RoundButton: React.FC<Props> = (props) => {
  const { classes = {}, onClick: handleClick } = props;
  return (
    <div className={classnames(styles.root, classes.root)} onClick={handleClick}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};
