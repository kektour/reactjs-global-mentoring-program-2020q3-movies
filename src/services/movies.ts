import axios from 'axios';
import { Movie } from '../models/movie';

export interface FetchMoviesParams {
  sortBy?: string;
  sortOrder?: 'desc' | 'asc';
  search?: string;
  searchBy?: 'title' | 'genres';
  filter?: string | Array<string>;
  offset?: number;
  limit?: number;
}

interface FetchMoviesResponse {
  totalAmount: number;
  data: Array<Movie>;
  offset: number;
  limit: number;
}

export const url = 'http://localhost:4000/movies';

export const fetchMovies = async (params: FetchMoviesParams = {}): Promise<FetchMoviesResponse> => {
  const res = await axios.get<FetchMoviesResponse>(url, { params });
  return res.data;
};

export const removeMovie = async (id: number) => {
  await axios.delete(`${url}/${id}`);
};

export const updateMovie = async (m: Movie) => {
  await axios.put(url, m);
};

export const createMovie = async (m: Omit<Movie, 'id'>) => {
  await axios.post(url, m);
};
