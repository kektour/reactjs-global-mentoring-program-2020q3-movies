export const MOVIES_SET_GENRE_FILTER = '@@MOVIES/SET_GENRE_FILTER';
export const MOVIES_SET_SORT_BY_FILTER = '@@MOVIES/SET_SORT_BY_FILTER';
export const MOVIES_SET_SEARCH_FILTER = '@@MOVIES/SET_SEARCH_FILTER';
export const MOVIES_RESET_FILTER = '@@MOVIES/RESET_FILTER';

export interface MoviesState {
  readonly filter: {
    readonly genre: string;
    readonly sortBy: string;
    readonly search: string;
  };
}

export interface MoviesSetGenreFilterAction {
  type: typeof MOVIES_SET_GENRE_FILTER;
  payload: string;
}

export interface MoviesSetSortByFilterAction {
  type: typeof MOVIES_SET_SORT_BY_FILTER;
  payload: string;
}

export interface MoviesSetSearchFilterAction {
  type: typeof MOVIES_SET_SEARCH_FILTER;
  payload: string;
}

export interface MoviesResetFilterAction {
  type: typeof MOVIES_RESET_FILTER;
}

export type MoviesActionTypes =
  | MoviesSetGenreFilterAction
  | MoviesSetSortByFilterAction
  | MoviesSetSearchFilterAction
  | MoviesResetFilterAction;
