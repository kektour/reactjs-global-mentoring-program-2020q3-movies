import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOVIES_SET_SEARCH_FILTER } from '../../../../store/movies';
import { useSearch } from './useSearch';

const mockStore = configureStore();

describe('useSearch', () => {
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

  it('Should have correct inital state', () => {
    const { result } = renderHook(() => useSearch(), { wrapper });
    expect(result.current.value).toEqual('baz');
  });

  it('Should update search value in store', async () => {
    const { result } = renderHook(() => useSearch(), { wrapper });
    act(() => {
      result.current.setValue('bazzzz');
    });
    const actions = store.getActions();
    const expectedPayload = { type: MOVIES_SET_SEARCH_FILTER, payload: 'bazzzz' };
    expect(actions).toEqual([expectedPayload]);
  });
});
