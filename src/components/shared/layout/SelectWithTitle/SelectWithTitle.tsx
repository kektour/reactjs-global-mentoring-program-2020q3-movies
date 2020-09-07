import React from 'react';
import classnames from 'classnames';
import { Select, Option } from '../Select';
import styles from './SelectWithTitle.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
  title: string;
  value: string;
  options: Array<Option>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectWithTitle: React.FC<Props> = (props) => {
  const { classes = {}, options, title, value, onChange: handleChange } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <p className={styles.title}>{title}</p>
      <Select classes={{ root: styles.selectRoot, option: styles.selectOption }} value={value} options={options} onChange={handleChange} />
    </div>
  );
};
