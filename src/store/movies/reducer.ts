import {
  MoviesActionTypes,
  MoviesState,
  MOVIES_CREATE,
  MOVIES_FETCHED,
  MOVIES_FETCHING,
  MOVIES_REMOVE,
  MOVIES_SET_GENRE_FILTER,
  MOVIES_SET_SORT_BY_FILTER,
  MOVIES_UPDATE
} from './types';

const initialState: MoviesState = {
  data: [],
  count: 0,
  isFetching: false,
  isFetched: false,
  filter: {
    genre: '',
    sortBy: '',
  },
};

export const moviesReducer = (state: MoviesState = initialState, action: MoviesActionTypes): MoviesState => {
  switch (action.type) {
    case MOVIES_FETCHING:
      return { ...state, isFetching: true };
    case MOVIES_FETCHED:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        data: action.payload.data,
        count: action.payload.totalAmount,
      };
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
    case MOVIES_UPDATE:
      return {
        ...state,
        data: state.data.map((m) => (m.id === action.payload.id ? action.payload : m)),
      };
    case MOVIES_REMOVE:
    case MOVIES_CREATE:
    default:
      return state;
  }
};
