import {
  MoviesActionTypes,
  MoviesState,
  MOVIES_RESET_FILTER,
  MOVIES_SET_GENRE_FILTER,
  MOVIES_SET_SEARCH_FILTER,
  MOVIES_SET_SORT_BY_FILTER,
} from './types';

const setSearchInitialState = (): string => {
  const searchPage = window.location.pathname.match(/\/search\/(\w*)/);
  if (!searchPage) {
    return '';
  }
  return searchPage[1];
};

const initialState: MoviesState = {
  filter: {
    genre: '',
    sortBy: 'title',
    search: setSearchInitialState(),
  },
};

export const moviesReducer = (state: MoviesState = initialState, action: MoviesActionTypes): MoviesState => {
  switch (action.type) {
    case MOVIES_SET_GENRE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          genre: action.payload,
        },
      };
    case MOVIES_SET_SORT_BY_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          sortBy: action.payload,
        },
      };
    case MOVIES_SET_SEARCH_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    case MOVIES_RESET_FILTER:
      return {
        ...state,
        filter: {
          search: '',
          sortBy: 'title',
          genre: '',
        },
      };
    default:
      return state;
  }
};
