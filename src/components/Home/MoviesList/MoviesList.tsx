import React from 'react';
import { Movie } from '../../../models/movie';
import { MovieCard } from './MovieCard';
import styles from './MoviesList.module.scss';

const movies: Array<Movie> = [
  {
    id: '1',
    img: 'https://image.tmdb.org/t/p/original//scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 4.3,
    note: 'Oscar winning Movie',
  },
  {
    id: '2',
    img: 'https://image.tmdb.org/t/p/original//apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 2,
    note: 'Oscar winning Movie',
  },
  {
    id: '3',
    img: 'https://image.tmdb.org/t/p/original//x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 3.8,
    note: 'Oscar winning Movie',
  },
  {
    id: '4',
    img: 'https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 4.3,
    note: 'Oscar winning Movie',
  },
  {
    id: '5',
    img: 'https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 1,
    note: 'Oscar winning Movie',
  },
  {
    id: '6',
    img: 'https://image.tmdb.org/t/p/original//zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 4.3,
    note: 'Oscar winning Movie',
  },
  {
    id: '7',
    img: 'https://image.tmdb.org/t/p/original//wrLC5kx0nEq9U0MyJD7dnOT6m5F.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 4.3,
    note: 'Oscar winning Movie',
  },
  {
    id: '8',
    img: 'https://image.tmdb.org/t/p/original//apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 4.3,
    note: 'Oscar winning Movie',
  },
  {
    id: '9',
    img: 'https://image.tmdb.org/t/p/original//bBBpi5pgOEZlCOgx2q116oPdJnx.jpg',
    title: 'Pulp Fiction',
    genre: 'foo',
    releaseDate: '1994-05-21',
    url: '',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.',
    runtime: 154,
    rating: 4.3,
    note: 'Oscar winning Movie',
  },
];

type Props = {
  onSelectMovie: (m: Movie) => void;
};

export const MoviesList: React.FC<Props> = (props) => {
  const { onSelectMovie: handleSelectMovie } = props;
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <p className={styles.moviesCount}>
          <span>9&nbsp;</span>movies found
        </p>
        <div className={styles.moviesContainer}>
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} onSelectMovie={handleSelectMovie} />
          ))}
        </div>
      </div>
    </div>
  );
};
