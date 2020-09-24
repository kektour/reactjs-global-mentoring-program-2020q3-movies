import { useDispatch, useSelector } from 'react-redux';
import { NewMovie } from '../../../../models/movie';
import { ErrorClearAction, errorClearActionCreator, errorSelector, ErrorState } from '../../../../store/error';
import { createMovieAction } from '../../../../store/movies';
import { ThunkAction } from '../../../../store/types';

type UseAddMovieModal = {
  createMovie: (m: NewMovie) => Promise<ThunkAction>;
  error: ErrorState;
  clearError: () => ErrorClearAction;
};

export const useAddMovieModal = (): UseAddMovieModal => {
  const dispatch = useDispatch();
  const error = useSelector(errorSelector);
  const createMovie = async (m: NewMovie) => await dispatch(createMovieAction(m));
  const clearError = () => dispatch(errorClearActionCreator());

  return {
    createMovie,
    error,
    clearError,
  };
};
