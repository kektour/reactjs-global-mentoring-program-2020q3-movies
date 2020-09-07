import React from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

type Props = {
  onButtonClick?: () => void;
};

export const Header: React.FC<Props> = (props) => {
  const { onButtonClick: handleButtonClick = () => null } = props;
  return (
    <div className={styles.root}>
      <Logo />
      <button className={styles.button} onClick={handleButtonClick}>
        + Add Movie
      </button>
    </div>
  );
};
