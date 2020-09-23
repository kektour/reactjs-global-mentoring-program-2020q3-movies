import { GetMoviesResponse, Movie, NewMovie } from '../../models/movie';

export const MOVIES_FETCHING = '@@MOVIES/FETCHING';
export const MOVIES_FETCHED = '@@MOVIES/FETCHED';
export const MOVIES_SET_GENRE_FILTER = '@@MOVIES/SET_GENRE_FILTER';
export const MOVIES_SET_SORT_BY_FILTER = '@@MOVIES/SET_SORT_BY_FILTER';
export const MOVIES_REMOVE = '@@MOVIES/REMOVE';
export const MOVIES_UPDATE = '@@MOVIES/UPDATE';
export const MOVIES_CREATE = '@@MOVIES/CREATE';
export const MOVIES_SET_ERROR = '@@MOVIES/SET_ERROR';
export const MOVIES_CLEAR_ERROR = '@@MOVIES/CLEAR_ERROR';

export interface MoviesFilterState {
  readonly genre: string;
  readonly sortBy: string;
}

export interface MoviesState {
  readonly data: Array<Movie>;
  readonly count: number;
  readonly isFetching: boolean;
  readonly isFetched: boolean;
  readonly filter: MoviesFilterState;
  readonly error: Record<string, string> | null;
}

export interface MoviesFetchingAction {
  type: typeof MOVIES_FETCHING;
}

export interface MoviesFetchedAction {
  type: typeof MOVIES_FETCHED;
  payload: GetMoviesResponse;
}

export interface MoviesSetGenreFilterAction {
  type: typeof MOVIES_SET_GENRE_FILTER;
  payload: string;
}

export interface MoviesSetSortByFilterAction {
  type: typeof MOVIES_SET_SORT_BY_FILTER;
  payload: string;
}

export interface MoviesRemoveAction {
  type: typeof MOVIES_REMOVE;
  payload: number;
}

export interface MoviesUpdateAction {
  type: typeof MOVIES_UPDATE;
  payload: Movie;
}

export interface MoviesCreateAction {
  type: typeof MOVIES_CREATE;
  payload: NewMovie;
}

export interface MoviesSetErrorAction {
  type: typeof MOVIES_SET_ERROR;
  error: { [key: string]: string };
}

export interface MoviesClearErrorAction {
  type: typeof MOVIES_CLEAR_ERROR;
}

export type MoviesActionTypes =
  | MoviesFetchingAction
  | MoviesFetchedAction
  | MoviesSetGenreFilterAction
  | MoviesSetSortByFilterAction
  | MoviesRemoveAction
  | MoviesUpdateAction
  | MoviesCreateAction
  | MoviesSetErrorAction
  | MoviesClearErrorAction;
