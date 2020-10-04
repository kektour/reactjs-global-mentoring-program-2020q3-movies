import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/notFound.jpg';
import { Footer } from '../shared/Footer';
import { Header } from '../shared/Header';
import styles from './Error.module.scss';

export const Error: React.FC<{}> = () => {
  return (
    <div className={styles.root}>
      <Header classes={{ root: styles.header }} />
      <div className={styles.container}>
        <h1 className={styles.title}>Page not found</h1>
        <img className={styles.notFoundImg} src={notFoundImg} alt="Not found" />
        <Link to="/" className={styles.goBackButton}>
          Go back to home
        </Link>
      </div>
      <Footer classes={{ root: styles.footer }} />
    </div>
  );
};
