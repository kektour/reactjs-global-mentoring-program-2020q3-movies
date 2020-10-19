import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MOVIES_RESET_FILTER } from '../../../store/movies';
import { useMovieDetailts } from './useMovieDetailts';

const mockStore = configureStore();

describe('useMovieDetailts', () => {
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
    const { result } = renderHook(() => useMovieDetailts(), { wrapper });
    act(() => {
      result.current.resetFilter();
    });
    const actions = store.getActions();
    const expectedPayload = { type: MOVIES_RESET_FILTER };
    expect(actions).toEqual([expectedPayload]);
  });
});
