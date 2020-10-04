import { useDispatch, useSelector } from 'react-redux';
import { moviesFilterSelector, MoviesSetSearchFilterAction, moviesSetSearchFilterActionCreator } from '../../../../store/movies';

type UseSearch = {
  value: string;
  setValue: (search: string) => MoviesSetSearchFilterAction;
};

export const useSearch = (): UseSearch => {
  const dispatch = useDispatch();
  const { search } = useSelector(moviesFilterSelector);
  const setSearchMovies = (search: string) => dispatch(moviesSetSearchFilterActionCreator(search));

  return {
    value: search,
    setValue: setSearchMovies,
  };
};
