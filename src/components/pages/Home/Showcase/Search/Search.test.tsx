import React from 'react';
import { act, createEvent, fireEvent, render, wait } from '@testing-library/react';
import { Search } from './Search';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import * as hooks from './useSearch';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const mockStore = configureStore();

describe('Search', () => {
  const store = mockStore({
    movies: {
      filter: {
        genre: 'foo',
        sortBy: 'bar',
        search: 'baz',
      },
    },
  });

  it('Should render component correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should user interact with the form', async () => {
    const { container, asFragment } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    await act(async () => await userEvent.type(container.querySelector('input[name=search]') as Element, 'Search Foo'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('User should submit form and be redirected', async () => {
    const searchValue = 'Search Foo';
    const setValueMock = jest.fn();
    const useSearchMock = jest.spyOn(hooks, 'useSearch').mockImplementation(() => ({
      value: (store.getState() as any).movies.filter.search,
      setValue: setValueMock,
    }));
    const { container } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    await act(async () => await userEvent.type(container.querySelector('input[name=search]') as Element, searchValue));
    act(() => userEvent.click(container.querySelector('button[type=submit]') as Element));

    await wait(() => {
      expect(setValueMock).toHaveBeenCalledWith(searchValue);
    });
    expect(mockHistoryPush).toHaveBeenCalledWith(`/search/${searchValue}`);

    useSearchMock.mockRestore();
  });

  it('User should submit form and be redirected №2', async () => {
    const setValueMock = jest.fn();
    const useSearchMock = jest.spyOn(hooks, 'useSearch').mockImplementation(() => ({
      value: (store.getState() as any).movies.filter.search,
      setValue: setValueMock,
    }));
    const { container } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    act(() => {
      fireEvent.change(container.querySelector('input[name=search]') as Element, {
        target: {
          value: '',
        },
      });
    });

    act(() => userEvent.click(container.querySelector('button[type=submit]') as Element));

    await wait(() => {
      expect(setValueMock).toHaveBeenCalledWith('');
    });
    expect(mockHistoryPush).toHaveBeenCalledWith('/');

    useSearchMock.mockRestore();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
