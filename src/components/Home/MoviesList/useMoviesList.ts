import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetMoviesQuery, Movie } from '../../../models/movie';
import { fetchMoviesAction, mapMoviesFilterSelector } from '../../../store/movies';
import { moviesCountSelector, moviesDataSelector } from '../../../store/movies/selectors';
import { RootState } from '../../../store/types';

type UseMoviesList = {
  movies: Array<Movie>;
  count: number;
};

export const useMoviesList = (): UseMoviesList => {
  const dispatch = useDispatch();
  const movies = useSelector<RootState, Array<Movie>>(moviesDataSelector);
  const count = useSelector<RootState, number>(moviesCountSelector);
  const filter = useSelector<RootState, GetMoviesQuery>(mapMoviesFilterSelector);

  useEffect(() => {
    dispatch(fetchMoviesAction(filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return {
    movies,
    count,
  };
};
