import { useDispatch } from 'react-redux';
import { Movie } from '../../../../models/movie';
import { updateMovieAction } from '../../../../store/movies';
import { ThunkAction } from '../../../../store/types';

type UseUpdateMovieModal = {
  updateMovie: (m: Movie) => ThunkAction;
};

export const useUpdateMovieModal = (): UseUpdateMovieModal => {
  const dispatch = useDispatch();
  const updateMovie = (m: Movie) => dispatch(updateMovieAction(m));
  return {
    updateMovie,
  };
};
