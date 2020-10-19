import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Movie } from '../../../models/movie';
import { mapMoviesFilterSelector } from '../../../store/movies';
import { RootState } from '../../../store/types';
import { fetchMovies, FetchMoviesParams } from '../../../services/movies';

type UseMoviesList = {
  movies: Array<Movie>;
  count: number;
};

export const useMoviesList = (): UseMoviesList => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [count, setCount] = useState<number>(0);
  const filter = useSelector<RootState, FetchMoviesParams>(mapMoviesFilterSelector);

  useEffect(() => {
    fetchMovies(filter).then((v) => {
      setMovies(v.data);
      setCount(v.totalAmount);
    });
  }, [filter]);

  return {
    movies,
    count,
  };
};
