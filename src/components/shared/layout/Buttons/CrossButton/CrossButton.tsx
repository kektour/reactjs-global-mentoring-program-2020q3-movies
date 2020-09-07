import React from 'react';
import classnames from 'classnames';
import styles from './CrossButton.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CrossButton: React.FC<Props> = (props) => {
  const { onClick: handleClick, classes = {} } = props;
  return <button className={classnames(styles.root, classes.root)} onClick={handleClick}></button>;
};
