import { moviesReducer } from './reducer';
import { MOVIES_RESET_FILTER, MOVIES_SET_GENRE_FILTER, MOVIES_SET_SEARCH_FILTER, MOVIES_SET_SORT_BY_FILTER } from './types';

describe('Movies Reducer', () => {
  it('Should return the initial state without initial search state', () => {
    expect(moviesReducer(undefined, {} as any)).toEqual({
      filter: {
        genre: '',
        sortBy: 'title',
        search: '',
      },
    });
  });

  it('Should handle MOVIES_SET_GENRE_FILTER', () => {
    expect(
      moviesReducer(undefined, {
        type: MOVIES_SET_GENRE_FILTER,
        payload: 'Foo',
      })
    ).toEqual({
      filter: {
        genre: 'Foo',
        sortBy: 'title',
        search: '',
      },
    });
  });

  it('Should handle MOVIES_SET_SORT_BY_FILTER', () => {
    expect(
      moviesReducer(undefined, {
        type: MOVIES_SET_SORT_BY_FILTER,
        payload: 'Foo',
      })
    ).toEqual({
      filter: {
        genre: '',
        sortBy: 'Foo',
        search: '',
      },
    });
  });

  it('Should handle MOVIES_SET_SEARCH_FILTER', () => {
    expect(
      moviesReducer(undefined, {
        type: MOVIES_SET_SEARCH_FILTER,
        payload: 'Foo',
      })
    ).toEqual({
      filter: {
        genre: '',
        sortBy: 'title',
        search: 'Foo',
      },
    });
  });

  it('Should handle MOVIES_RESET_FILTER', () => {
    expect(
      moviesReducer(
        {
          filter: {
            genre: 'foo',
            sortBy: 'bar',
            search: 'baz',
          },
        },
        {
          type: MOVIES_RESET_FILTER,
        }
      )
    ).toEqual({
      filter: {
        genre: '',
        sortBy: 'title',
        search: '',
      },
    });
  });
});
