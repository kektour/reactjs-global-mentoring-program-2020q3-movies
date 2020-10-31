import React from 'react';
import Link from 'next/link';
import { Footer } from '../../shared/Footer';
import { Header } from '../../shared/Header';
import styles from './Error.module.scss';

export const Error: React.FC<{}> = () => {
  return (
    <div className={styles.root}>
      <Header classes={{ root: styles.header }} />
      <div className={styles.container}>
        <h1 className={styles.title}>Page not found</h1>
        <img className={styles.notFoundImg} src="/notFound.jpg" alt="Not found" />
        <Link href="/">
          <a className={styles.goBackButton}>Go back to home</a>
        </Link>
      </div>
      <Footer classes={{ root: styles.footer }} />
    </div>
  );
};
