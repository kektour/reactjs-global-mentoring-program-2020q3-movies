import { useDispatch } from 'react-redux';
import { removeMovieAction } from '../../../../store/movies';
import { ThunkAction } from '../../../../store/types';

type UseRemoveMovieModal = {
  removeMovie: (id: number) => ThunkAction;
};

export const useRemoveMovieModal = (): UseRemoveMovieModal => {
  const dispatch = useDispatch();
  const removeMovie = (id: number) => dispatch(removeMovieAction(id));
  return {
    removeMovie,
  };
};
