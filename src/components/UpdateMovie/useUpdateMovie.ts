import { AxiosError } from 'axios';
import { useState } from 'react';
import { Movie } from '../../models/movie';
import { updateMovie as uM } from '../../services/movies';

type UseUpdateMovie = {
  updateMovie: (m: Movie) => Promise<void>;
  error: Record<string, string> | null;
  clearError: () => void;
};

interface PostMovieErrorResponse {
  messages: Array<string>;
}

export const useUpdateMovie = (): UseUpdateMovie => {
  const [error, setError] = useState<Record<string, string> | null>(null);
  const updateMovie = async (m: Movie) => {
    try {
      uM(m);
    } catch (err) {
      const typedErr = err as AxiosError<PostMovieErrorResponse>;
      const errorMessages = getErrorMessages(typedErr.response!.data.messages);
      setError(errorMessages);
    }
  };
  const clearError = () => setError(null);

  return {
    updateMovie,
    error,
    clearError,
  };
};

const getErrorMessages = (arr: Array<string>): Record<string, string> =>
  arr.reduce((obj, v) => {
    let [fieldName] = v.split(' ');
    fieldName = fieldName.replace(/"/g, '');
    return {
      ...obj,
      [fieldName]: v,
    };
  }, {});
