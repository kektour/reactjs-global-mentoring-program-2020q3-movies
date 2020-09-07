import React from 'react';
import classnames from 'classnames';
import styles from './Input.module.scss';

export enum InputType {
  Date = 'date',
  Text = 'text',
  Number = 'number',
}

type Props = {
  classes?: {
    root?: string;
  };
  readOnly?: boolean;
  placeholder?: string;
  title: string;
  type?: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = (props) => {
  const { classes = {}, readOnly, placeholder, title, type = InputType.Text, value, onChange: handleChange } = props;
  return (
    <div className={classnames(styles.root, classes.root)}>
      <p className={styles.title}>{title}</p>
      <input className={styles.input} placeholder={placeholder} readOnly={readOnly} type={type} value={value} onChange={handleChange} />
    </div>
  );
};
