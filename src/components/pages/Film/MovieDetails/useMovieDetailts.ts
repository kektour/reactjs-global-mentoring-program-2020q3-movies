import { useDispatch } from 'react-redux';
import { moviesResetFilterActionCreator } from '../../../../store/movies';

type UseMovieDetailts = {
  resetFilter: () => void;
};

export const useMovieDetailts = (): UseMovieDetailts => {
  const dispatch = useDispatch();
  const resetFilter = () => dispatch(moviesResetFilterActionCreator());
  return {
    resetFilter,
  };
};
