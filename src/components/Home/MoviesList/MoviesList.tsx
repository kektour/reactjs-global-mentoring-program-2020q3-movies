import React from 'react';
import { Movie, Item as MovieItem } from './Movie';
import styles from './MoviesList.module.scss';

const movies: Array<MovieItem> = [
  {
    id: '1',
    img: 'https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg',
    title: 'Title 1',
    genre: 'foo',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '2',
    img: 'https://image.tmdb.org/t/p/original//apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
    title: 'Title 2',
    genre: 'bar',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '3',
    img: 'https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    title: 'Title 3',
    genre: 'baz',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '4',
    img: 'https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg',
    title: 'Title 4',
    genre: 'foo',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '5',
    img: 'https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg',
    title: 'Title 5',
    genre: 'bar',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '6',
    img: 'https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg',
    title: 'Title 6',
    genre: 'baz',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '7',
    img: 'https://image.tmdb.org/t/p/original//wrLC5kx0nEq9U0MyJD7dnOT6m5F.jpg',
    title: 'Title 7',
    genre: 'foo',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '8',
    img: 'https://image.tmdb.org/t/p/original//apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
    title: 'Title 8',
    genre: 'bar',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
  {
    id: '9',
    img: 'https://image.tmdb.org/t/p/original//bBBpi5pgOEZlCOgx2q116oPdJnx.jpg',
    title: 'Title 9',
    genre: 'baz',
    releaseDate: '2000-01-01',
    url: '',
    overview: '',
    runtime: '',
  },
];

type Props = {};

export const MoviesList: React.FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.moviesCount}>
          <span>9&nbsp;</span>movies found
        </p>
        <div className={styles.moviesContainer}>
          {movies.map((m) => (
            <Movie key={m.id} movie={m} />
          ))}
        </div>
      </div>
    </div>
  );
};
