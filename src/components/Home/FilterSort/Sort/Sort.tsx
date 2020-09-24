import React, { useCallback, useState } from 'react';
import { Option, Select } from '../../../shared/select/Select';
import styles from './Sort.module.scss';
import { useSort } from './useSort';

type Props = {};

const options: Array<Option> = [
  {
    label: 'Title',
    value: 'title',
  },
  {
    label: 'Vote Average',
    value: 'vote_average',
  },
  {
    label: 'Release Date',
    value: 'release_date',
  },
  {
    label: 'Runtime',
    value: 'runtime',
  },
];

export const Sort: React.FC<Props> = () => {
  const [value, setValue] = useState(options[0].value);
  const sort = useSort();
  const handleSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      sort.sortMovies(e.target.value);
    },
    [sort]
  );
  return (
    <div className={styles.root}>
      <p className={styles.label}>Sort By</p>
      <Select
        nativeSelectProps={{
          value,
          onChange: handleSelectChange,
        }}
        options={options}
      />
    </div>
  );
};
