import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { errorReducer } from './error';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  error: errorReducer,
});
