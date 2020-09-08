import React, { useCallback, useState } from 'react';
import { Option, Select } from '../../../shared/select/Select';
import styles from './Sort.module.scss';

type Props = {};

const options: Array<Option> = [
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

export const Sort: React.FC<Props> = () => {
  const [value, setValue] = useState(options[0].value);
  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value), []);
  return (
    <div className={styles.root}>
      <p className={styles.label}>Sort By</p>
      <Select value={value} options={options} onChange={handleSelectChange} />
    </div>
  );
};
