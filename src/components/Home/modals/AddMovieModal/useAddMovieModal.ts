import { useDispatch } from 'react-redux';
import { NewMovie } from '../../../../models/movie';
import { createMovieAction } from '../../../../store/movies';
import { ThunkAction } from '../../../../store/types';

type UseAddMovieModal = {
  createMovie: (m: NewMovie) => ThunkAction;
};

export const useAddMovieModal = (): UseAddMovieModal => {
  const dispatch = useDispatch();
  const createMovie = (m: NewMovie) => dispatch(createMovieAction(m));
  return {
    createMovie,
  };
};
