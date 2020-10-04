import { useDispatch } from 'react-redux';
import { removeMovieAction } from '../../store/movies';
import { ThunkAction } from '../../store/types';

type UseRemoveMovie = {
  removeMovie: (id: number) => ThunkAction;
};

export const useRemoveMovie = (): UseRemoveMovie => {
  const dispatch = useDispatch();
  const removeMovie = (id: number) => dispatch(removeMovieAction(id));
  return {
    removeMovie,
  };
};
