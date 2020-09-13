import { useDispatch } from 'react-redux';
import { moviesSetSortByFilterActionCreator, MoviesSetSortByFilterAction } from '../../../../store/movies';

type UseSort = {
  sortMovies: (sortBy: string) => MoviesSetSortByFilterAction;
};

export const useSort = (): UseSort => {
  const dispatch = useDispatch();
  const sortMovies = (sortBy: string) => dispatch(moviesSetSortByFilterActionCreator(sortBy));

  return {
    sortMovies,
  };
};
