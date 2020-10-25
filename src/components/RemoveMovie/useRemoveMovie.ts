import { removeMovie as rM } from '../../services/movies';

type UseRemoveMovie = {
  removeMovie: (id: number) => Promise<void>;
};

export const useRemoveMovie = (): UseRemoveMovie => {
  const removeMovie = (id: number) => rM(id);
  return {
    removeMovie,
  };
};
