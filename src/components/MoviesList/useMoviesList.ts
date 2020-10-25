import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Movie } from '../../models/movie';
import { fetchMovies, FetchMoviesParams } from '../../services/movies';
import { mapMoviesFilterSelector } from '../../store/movies';
import { RootState } from '../../store/types';

type UseMoviesList = {
  movies: Array<Movie>;
  count: number;
};

export const useMoviesList = (): UseMoviesList => {
  const router = useRouter();
  const query = router.query['query'] as string;
  // Film page
  const search = router.query['search'] as string;
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [count, setCount] = useState<number>(0);
  const filter = useSelector<RootState, FetchMoviesParams>(mapMoviesFilterSelector);

  useEffect(() => {
    fetchMovies({
      ...filter,
      searchBy: 'title',
      search: query || search,
    }).then((v) => {
      setMovies(v.data);
      setCount(v.totalAmount);
    });
  }, [filter, query, search]);

  return {
    movies,
    count,
  };
};
