import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../../../../models/movie';
import { ErrorClearAction, errorClearActionCreator, errorSelector, ErrorState } from '../../../../store/error';
import { updateMovieAction } from '../../../../store/movies';
import { ThunkAction } from '../../../../store/types';

type UseUpdateMovieModal = {
  updateMovie: (m: Movie) => Promise<ThunkAction>;
  error: ErrorState;
  clearError: () => ErrorClearAction;
};

export const useUpdateMovieModal = (): UseUpdateMovieModal => {
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const updateMovie = async (m: Movie) => await dispatch(updateMovieAction(m));
  const clearError = () => dispatch(errorClearActionCreator());

  return {
    updateMovie,
    error,
    clearError,
  };
};
