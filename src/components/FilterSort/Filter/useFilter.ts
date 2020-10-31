import { useDispatch } from 'react-redux';
import { moviesSetGenreFilterActionCreator, MoviesSetGenreFilterAction } from '../../../store/movies';

type UseFilter = {
  filterMovies: (genre: string) => MoviesSetGenreFilterAction;
};

export const useFilter = (): UseFilter => {
  const dispatch = useDispatch();
  const filterMovies = (genre: string) => dispatch(moviesSetGenreFilterActionCreator(genre));

  return {
    filterMovies,
  };
};
