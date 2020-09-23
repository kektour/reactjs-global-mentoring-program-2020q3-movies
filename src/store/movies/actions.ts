import axios, { AxiosError } from 'axios';
import { GetMoviesQuery, GetMoviesResponse, Movie, NewMovie, PostMovieErrorResponse } from '../../models/movie';
import { ErrorSetAction, ERROR_SET } from '../error';
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
  MOVIES_UPDATE
} from './types';

const url = 'http://localhost:4000/movies';

export const moviesSetGenreFilterActionCreator = (value: string): MoviesSetGenreFilterAction => ({
  type: MOVIES_SET_GENRE_FILTER,
  payload: value,
});

export const moviesSetSortByFilterActionCreator = (value: string): MoviesSetSortByFilterAction => ({
  type: MOVIES_SET_SORT_BY_FILTER,
  payload: value,
});

export const fetchMoviesAction = (params: GetMoviesQuery = {}): ThunkAction => async (dispatch) => {
  try {
    dispatch({ type: MOVIES_FETCHING } as MoviesFetchingAction);
    const res = await axios.get<GetMoviesResponse>(url, { params });
    dispatch({
      type: MOVIES_FETCHED,
      payload: res.data,
    } as MoviesFetchedAction);
  } catch (err) {
    console.error(err);
  }
};

export const removeMovieAction = (id: number): ThunkAction => async (dispatch, getState) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch({ type: MOVIES_REMOVE, payload: id } as MoviesRemoveAction);
    const filter = mapMoviesFilterSelector(getState());
    dispatch(fetchMoviesAction(filter));
  } catch (err) {
    console.error(err);
  }
};

export const updateMovieAction = (m: Movie): ThunkAction => async (dispatch) => {
  try {
    await axios.put(url, m);
    dispatch({
      type: MOVIES_UPDATE,
      payload: m,
    } as MoviesUpdateAction);
  } catch (err) {
    const typedErr = err as AxiosError<PostMovieErrorResponse>;
    const errorMessages = getErrorMessages(typedErr.response!.data.messages);
    dispatch({
      type: ERROR_SET,
      error: errorMessages,
    } as ErrorSetAction);

    throw new Error(err);
  }
};

export const createMovieAction = (m: NewMovie): ThunkAction => async (dispatch, getState) => {
  try {
    await axios.post(url, m);
    dispatch({
      type: MOVIES_CREATE,
      payload: m,
    } as MoviesCreateAction);
    const filter = mapMoviesFilterSelector(getState());
    dispatch(fetchMoviesAction(filter));
  } catch (err) {
    const typedErr = err as AxiosError<PostMovieErrorResponse>;
    const errorMessages = getErrorMessages(typedErr.response!.data.messages);
    dispatch({
      type: ERROR_SET,
      error: errorMessages,
    } as ErrorSetAction);

    throw new Error(err);
  }
};

const getErrorMessages = (arr: Array<string>): Record<string, string> =>
  arr.reduce((obj, v) => {
    let [fieldName] = v.split(' ');
    fieldName = fieldName.replace(/"/g, '');
    return {
      ...obj,
      [fieldName]: v,
    };
  }, {});
