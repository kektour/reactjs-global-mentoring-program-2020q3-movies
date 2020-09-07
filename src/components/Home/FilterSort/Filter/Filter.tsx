import React, { useCallback } from 'react';
import { FilterButton } from './FilterButton';
import styles from './Filter.module.scss';

export interface Item {
  id: string;
  name: string;
}

type Props = {
  items: Array<Item>;
  value: string;
  onClick: (itemId: string) => void;
};

type WrapProps = {
  item: Item;
  value: string;
  onClick: (itemId: string) => void;
};

const FilterButtonWrap: React.FC<WrapProps> = (props) => {
  const { item, value, onClick: handleClick } = props;
  const handleFilterButtonClick = useCallback(() => {
    handleClick(item.id);
  }, [item, handleClick]);
  return (
    <FilterButton key={item.id} selected={item.id === value} onClick={handleFilterButtonClick}>
      {item.name}
    </FilterButton>
  );
};

export const Filter: React.FC<Props> = (props) => {
  const { items, value, onClick: handleClick } = props;
  return (
    <div className={styles.root}>
      {items.map((i) => (
        <FilterButtonWrap key={i.id} item={i} value={value} onClick={handleClick} />
      ))}
    </div>
  );
};
