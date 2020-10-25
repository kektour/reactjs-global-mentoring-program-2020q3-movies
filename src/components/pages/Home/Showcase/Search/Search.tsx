import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import styles from './Search.module.scss';

export const Search: React.FC<{}> = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: { search: router.query['query'] || '' },
    onSubmit: (values) => {
      if (values.search) {
        router.push(`/search/${values.search}`);
      } else {
        router.push('/');
      }
    },
    onReset: () => {
      formik.setValues({ search: router.query['query'] || '' });
    },
  });
  useEffect(() => {
    if (router.query['query']) {
      formik.setFieldValue('search', router.query['query']);
    }
  }, [router.query]);

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
