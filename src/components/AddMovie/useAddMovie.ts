import { AxiosError } from 'axios';
import { useState } from 'react';
import { Movie } from '../../models/movie';
import { createMovie as cM } from '../../services/movies';

type UseAddMovie = {
  createMovie: (m: Omit<Movie, 'id'>) => Promise<void>;
  error: Record<string, string> | null;
  clearError: () => void;
};

interface PostMovieErrorResponse {
  messages: Array<string>;
}

export const useAddMovie = (): UseAddMovie => {
  const [error, setError] = useState<Record<string, string> | null>(null);
  const createMovie = async (m: Omit<Movie, 'id'>) => {
    try {
      cM(m);
    } catch (err) {
      const typedErr = err as AxiosError<PostMovieErrorResponse>;
      const errorMessages = getErrorMessages(typedErr.response!.data.messages);
      setError(errorMessages);
    }
  };
  const clearError = () => setError(null);

  return {
    createMovie,
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
