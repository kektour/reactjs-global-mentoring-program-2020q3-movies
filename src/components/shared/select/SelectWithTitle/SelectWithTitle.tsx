import React from 'react';
import classnames from 'classnames';
import { Select, Option } from '../Select';
import styles from './SelectWithTitle.module.scss';

type Props = {
  classes?: {
    root?: string;
    select?: {
      root?: string;
    };
  };
  title: string;
  nativeSelectProps: Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'>;
  options: Array<Option>;
};

export const SelectWithTitle: React.FC<Props> = (props) => {
  const { classes = {}, title, nativeSelectProps, options } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <p className={styles.title}>{title}</p>
      <Select
        classes={{ root: classnames(styles.selectRoot, classes.select?.root), option: styles.selectOption }}
        nativeSelectProps={nativeSelectProps}
        options={options}
      />
    </div>
  );
};
