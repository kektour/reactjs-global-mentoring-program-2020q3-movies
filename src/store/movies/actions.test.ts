import { moviesResetFilterActionCreator, moviesSetGenreFilterActionCreator, moviesSetSortByFilterActionCreator } from './actions';
import { MOVIES_RESET_FILTER, MOVIES_SET_GENRE_FILTER, MOVIES_SET_SORT_BY_FILTER } from './types';

describe('Movies Actions', () => {
  it('should create reset filter action', () => {
    const expectedAction = {
      type: MOVIES_RESET_FILTER,
    };
    expect(moviesResetFilterActionCreator()).toEqual(expectedAction);
  });

  it('should create set genre filter action', () => {
    const value = 'Foo';
    const expectedAction = {
      type: MOVIES_SET_GENRE_FILTER,
      payload: value,
    };
    expect(moviesSetGenreFilterActionCreator(value)).toEqual(expectedAction);
  });

  it('should create set sort by filter action', () => {
    const value = 'Foo';
    const expectedAction = {
      type: MOVIES_SET_SORT_BY_FILTER,
      payload: value,
    };
    expect(moviesSetSortByFilterActionCreator(value)).toEqual(expectedAction);
  });
});
