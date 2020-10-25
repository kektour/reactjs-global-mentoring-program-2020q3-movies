import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { Movie } from '../../models/movie';
import { createMovie as cM } from '../../services/movies';

type UseAddMovie = {
  error: Record<string, string> | null;
  clearError: () => void;
  createMovie: (m: Omit<Movie, 'id'>) => Promise<void>;
};

interface PostMovieErrorResponse {
  messages: Array<string>;
}

export const useAddMovie = (): UseAddMovie => {
  const [error, setError] = useState<Record<string, string> | null>(null);
  const createMovie = useCallback(async (m: Omit<Movie, 'id'>) => {
    try {
      await cM(m);
    } catch (err) {
      const typedErr = err as AxiosError<PostMovieErrorResponse>;
      const errorMessages = getErrorMessages(typedErr.response!.data.messages);
      setError(errorMessages);
      throw new Error('Create movie error');
    }
  }, []);
  const clearError = useCallback(() => setError(null), []);

  return {
    error,
    clearError,
    createMovie,
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
