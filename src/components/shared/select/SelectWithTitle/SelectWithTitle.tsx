import React from 'react';
import classnames from 'classnames';
import { Select, Option } from '../Select';
import styles from './SelectWithTitle.module.scss';

type Props = {
  classes?: {
    root?: string;
    selectRoot?: string;
  };
  title: string;
  value: string | Array<string>;
  options: Array<Option>;
  multiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectWithTitle: React.FC<Props> = (props) => {
  const { classes = {}, multiple = false, options, title, value, onChange: handleChange } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <p className={styles.title}>{title}</p>
      <Select
        classes={{ root: classnames(styles.selectRoot, classes.selectRoot), option: styles.selectOption }}
        multiple={multiple}
        value={value}
        options={options}
        onChange={handleChange}
      />
    </div>
  );
};
