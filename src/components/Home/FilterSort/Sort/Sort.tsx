import React from 'react';
import { Option, Select } from '../../../shared/layout/Select';
import styles from './Sort.module.scss';

type Props = {
  value: string;
  options: Array<Option>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Sort: React.FC<Props> = (props) => {
  const { value, options, onChange: handleChange } = props;
  return (
    <div className={styles.root}>
      <p className={styles.label}>Sort By</p>
      <Select value={value} options={options} onChange={handleChange} />
    </div>
  );
};
