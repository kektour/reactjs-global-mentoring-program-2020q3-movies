import axios from 'axios';
import { GetMoviesQuery, GetMoviesResponse, Movie, NewMovie } from '../../models/movie';
import { ThunkAction } from '../types';
import { mapMoviesFilterSelector } from './selectors';
import {
  MoviesCreateAction,
  MoviesFetchedAction,
  MoviesFetchingAction,
  MoviesRemoveAction,
  MoviesSetGenreFilterAction,
  MoviesSetSortByFilterAction,
  MoviesUpdateAction,
  MOVIES_CREATE,
  MOVIES_FETCHED,
  MOVIES_FETCHING,
  MOVIES_REMOVE,
  MOVIES_SET_GENRE_FILTER,
  MOVIES_SET_SORT_BY_FILTER,
  MOVIES_UPDATE,
} from './types';

const url = 'http://localhost:4000/movies';

const moviesFetchingActionCreator = (): MoviesFetchingAction => ({
  type: MOVIES_FETCHING,
});

const moviesFetchedActionCreator = (apiRes: GetMoviesResponse): MoviesFetchedAction => ({
  type: MOVIES_FETCHED,
  payload: apiRes,
});

export const moviesSetGenreFilterActionCreator = (value: string): MoviesSetGenreFilterAction => ({
  type: MOVIES_SET_GENRE_FILTER,
  payload: value,
});

export const moviesSetSortByFilterActionCreator = (value: string): MoviesSetSortByFilterAction => ({
  type: MOVIES_SET_SORT_BY_FILTER,
  payload: value,
});

const moviesRemoveActionCreator = (id: number): MoviesRemoveAction => ({
  type: MOVIES_REMOVE,
  payload: id,
});

export const fetchMoviesAction = (params: GetMoviesQuery = {}): ThunkAction => async (dispatch) => {
  try {
    dispatch(moviesFetchingActionCreator());
    const res = await axios.get<GetMoviesResponse>(url, { params });
    dispatch(moviesFetchedActionCreator(res.data));
  } catch (err) {
    console.error(err);
  }
};

export const removeMovieAction = (id: number): ThunkAction => async (dispatch, getState) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch(moviesRemoveActionCreator(id));
    const filter = mapMoviesFilterSelector(getState());
    dispatch(fetchMoviesAction(filter));
  } catch (err) {
    console.error(err);
  }
};

const moviesUpdateActionCreator = (m: Movie): MoviesUpdateAction => ({
  type: MOVIES_UPDATE,
  payload: m,
});

export const updateMovieAction = (m: Movie): ThunkAction => async (dispatch) => {
  try {
    await axios.put(url, m);
    dispatch(moviesUpdateActionCreator(m));
  } catch (err) {
    console.error(err);
  }
};

const moviesCreateActionCreator = (m: NewMovie): MoviesCreateAction => ({
  type: MOVIES_CREATE,
  payload: m,
});

export const createMovieAction = (m: NewMovie): ThunkAction => async (dispatch, getState) => {
  try {
    await axios.post(url, m);
    dispatch(moviesCreateActionCreator(m));
    const filter = mapMoviesFilterSelector(getState());
    dispatch(fetchMoviesAction(filter));
  } catch (err) {
    console.error(err);
  }
};
