import {
  MoviesResetFilterAction,
  MoviesSetGenreFilterAction,
  MoviesSetSortByFilterAction,
  MOVIES_RESET_FILTER,
  MOVIES_SET_GENRE_FILTER,
  MOVIES_SET_SORT_BY_FILTER,
} from './types';

export const moviesSetGenreFilterActionCreator = (value: string): MoviesSetGenreFilterAction => ({
  type: MOVIES_SET_GENRE_FILTER,
  payload: value,
});

export const moviesSetSortByFilterActionCreator = (value: string): MoviesSetSortByFilterAction => ({
  type: MOVIES_SET_SORT_BY_FILTER,
  payload: value,
});

export const moviesResetFilterActionCreator = (): MoviesResetFilterAction => ({
  type: MOVIES_RESET_FILTER,
});
