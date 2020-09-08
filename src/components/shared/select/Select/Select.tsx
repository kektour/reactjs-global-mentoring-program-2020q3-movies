import React from 'react';
import classnames from 'classnames';
import styles from './Select.module.scss';

export interface Option {
  label: string;
  value: string;
}

type Props = {
  classes?: {
    root?: string;
    option?: string;
  };
  value: string;
  options: Array<Option>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select: React.FC<Props> = (props) => {
  const { classes = {}, options, value, onChange: handleChange } = props;
  return (
    <select className={classnames(styles.root, classes.root)} value={value} onChange={handleChange}>
      <option value="" disabled hidden>
        Choose here
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value} className={classnames(styles.option, classes.option)}>
          {o.label}
        </option>
      ))}
    </select>
  );
};