import classnames from 'classnames';
import React from 'react';
import styles from './Input.module.scss';

type Props = {
  classes?: {
    root?: string;
  };
  title: string;
  nativeInputProps: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>;
};

export const Input: React.FC<Props> = (props) => {
  const { classes = {}, title, nativeInputProps } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <p className={styles.title}>{title}</p>
      <input className={styles.input} {...nativeInputProps} />
    </div>
  );
};
