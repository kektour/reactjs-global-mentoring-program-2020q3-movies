import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOVIES_SET_SORT_BY_FILTER } from '../../../../store/movies';
import { useSort } from './useSort';

const mockStore = configureStore();

describe('useSort', () => {
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

  it('Should update sort value in store', async () => {
    const { result } = renderHook(() => useSort(), { wrapper });
    act(() => {
      result.current.sortMovies('bazzzz');
    });
    const actions = store.getActions();
    const expectedPayload = { type: MOVIES_SET_SORT_BY_FILTER, payload: 'bazzzz' };
    expect(actions).toEqual([expectedPayload]);
  });
});
