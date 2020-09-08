import React, { useCallback, useState } from 'react';
import { FilterButton } from './FilterButton';
import styles from './Filter.module.scss';

export interface Item {
  id: string;
  name: string;
}

type Props = {};

const items: Array<Item> = [
  {
    id: 'all',
    name: 'All',
  },
  {
    id: 'documentary',
    name: 'Documentary',
  },
  {
    id: 'comedy',
    name: 'Comedy',
  },
  {
    id: 'horror',
    name: 'Horror',
  },
  {
    id: 'crime',
    name: 'Crime',
  },
];

export const Filter: React.FC<Props> = () => {
  const [item, setItem] = useState(items[0].id);
  const handleFilterButtonClick = useCallback((id: string) => setItem(id), []);

  return (
    <div className={styles.root}>
      {items.map((i) => (
        <FilterButton key={i.id} item={i} isSelected={i.id === item} onClick={handleFilterButtonClick} />
      ))}
    </div>
  );
};
