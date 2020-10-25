import { createSelector } from 'reselect';
import { FetchMoviesParams } from '../../services/movies';
import { RootState } from '../types';

export const moviesFilterSelector = (state: RootState) => state.movies.filter;
export const mapMoviesFilterSelector = createSelector(
  moviesFilterSelector,
  (filter): FetchMoviesParams => {
    const params: FetchMoviesParams = {};
    params.limit = 9;
    if (filter.genre && filter.genre !== 'all') {
      params.filter = filter.genre;
    }
    if (filter.sortBy) {
      params.sortOrder = 'desc';
      params.sortBy = filter.sortBy;
    }
    if (filter.search) {
      params.searchBy = 'title';
      params.search = filter.search;
    }
    return params;
  }
);
