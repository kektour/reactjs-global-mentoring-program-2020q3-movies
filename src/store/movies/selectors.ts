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
      params.filter = filter.genre;
    }
    if (filter.sortBy) {
      params.sortOrder = 'asc';
      params.sortBy = filter.sortBy;
    }
    if (filter.search) {
      params.searchBy = 'title';
      params.search = filter.search;
    }
    return params;
  }
);
