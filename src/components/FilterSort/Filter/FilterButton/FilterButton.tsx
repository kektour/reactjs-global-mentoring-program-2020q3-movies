import React, { useCallback } from 'react';
import classnames from 'classnames';
import { Item } from '../Filter';
import styles from './FilterButton.module.scss';

type Props = {
  item: Item;
  isSelected: boolean;
  onClick: (id: string) => void;
};

export const FilterButton: React.FC<Props> = (props) => {
  const { item, isSelected, onClick } = props;
  const handleClick = useCallback(() => onClick(item.id), [item, onClick]);
  return (
    <div className={styles.root}>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.buttonActive]: isSelected,
        })}
        onClick={handleClick}
      >
        {item.name}
      </button>
      {isSelected && <div className={styles.line}></div>}
    </div>
  );
};
