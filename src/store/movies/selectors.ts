import { createSelector } from 'reselect';
import { GetMoviesQuery, Movie } from '../../models/movie';
import { RootState } from '../types';
import { MoviesFilterState } from './types';

export const moviesDataSelector = (state: RootState): Array<Movie> => state.movies.data;
export const moviesCountSelector = (state: RootState): number => state.movies.count;
export const moviesFilterSelector = (state: RootState): MoviesFilterState => state.movies.filter;
export const mapMoviesFilterSelector = createSelector(
  moviesFilterSelector,
  (filter: MoviesFilterState): GetMoviesQuery => {
    const params: GetMoviesQuery = {};
    params.limit = 9;
    if (filter.genre && filter.genre !== 'all') {
      params.searchBy = 'genres';
      params.search = filter.genre;
    }
    if (filter.sortBy) {
      params.sortOrder = 'desc';
      params.sortBy = filter.sortBy;
    }
    return params;
  }
);
// export const moviesErrorSelector = (state: RootState): Record<string, string> | null => state.movies.error;
