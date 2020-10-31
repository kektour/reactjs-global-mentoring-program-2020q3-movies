import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOVIES_SET_GENRE_FILTER } from '../../../../store/movies';
import { useFilter } from './useFilter';

const mockStore = configureStore();

describe('useFilter', () => {
  const store = mockStore({
    movies: {
      filter: {
        genre: 'foo',
        sortBy: 'bar',
        search: 'baz',
      },
    },
  });
  const wrapper = ({ children }: any) => <Provider store={store}>{children}</Provider>;

  it('Should update filter value in store', async () => {
    const { result } = renderHook(() => useFilter(), { wrapper });
    act(() => {
      result.current.filterMovies('bazzzz');
    });
    const actions = store.getActions();
    const expectedPayload = { type: MOVIES_SET_GENRE_FILTER, payload: 'bazzzz' };
    expect(actions).toEqual([expectedPayload]);
  });
});
