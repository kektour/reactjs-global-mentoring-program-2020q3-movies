import React, { useState, useCallback } from 'react';
import { Filter, Item as FilterItem } from './Filter';
import styles from './FilterSort.module.scss';
import { Option } from '../../shared/layout/Select';
import { Sort } from './Sort';

const filterItems: Array<FilterItem> = [
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

const sortOptions: Array<Option> = [
  {
    label: 'Foo',
    value: 'foo',
  },
  {
    label: 'Bar',
    value: 'bar',
  },
  {
    label: 'Baz',
    value: 'baz',
  },
];

type Props = {};

export const FilterSort: React.FC<Props> = () => {
  const [filter, setFilter] = useState(filterItems[0].id);
  const [sort, setSort] = useState(sortOptions[0].value);
  const handleLineSelectorClick = useCallback((filterId: string) => {
    setFilter(filterId);
  }, []);
  const handleSortButtonClick = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.controls}>
          <Filter items={filterItems} value={filter} onClick={handleLineSelectorClick} />
          <Sort options={sortOptions} value={sort} onChange={handleSortButtonClick} />
        </div>
        <div className={styles.line} ></div>
      </div>
    </div>
  );
};
