import React from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSearch } from './useSearch';

import styles from './Search.module.scss';

export const Search: React.FC<{}> = () => {
  const history = useHistory();
  const search = useSearch();
  const formik = useFormik({
    initialValues: { search: search.value },
    onSubmit: (values) => {
      if (values.search) {
        history.push(`/search/${values.search}`);
      } else {
        history.push('/');
      }
      search.setValue(values.search);
    },
    onReset: () => {
      formik.setValues({ search: search.value });
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <input
        className={styles.field}
        type="text"
        name="search"
        value={formik.values.search}
        onChange={formik.handleChange}
        placeholder="What do you want to watch?"
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};
