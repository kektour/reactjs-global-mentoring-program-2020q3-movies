import React, { useCallback } from 'react';
import classnames from 'classnames';
import styles from './FilterButton.module.scss';

type Props = {
  selected: boolean;
  onClick: () => void;
};

export const FilterButton: React.FC<Props> = (props) => {
  const { children, selected, onClick: handleClick } = props;
  const handleHrefClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleClick();
  }, [handleClick]);
  return (
    <div className={styles.root}>
      <a
        href="/"
        className={classnames({
          [styles.button]: true,
          [styles.buttonActive]: selected,
        })}
        onClick={handleHrefClick}
      >
        {children}
      </a>
      {selected && <div className={styles.line}></div>}
    </div>
  );
};
