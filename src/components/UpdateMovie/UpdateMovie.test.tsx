import React from 'react';
import ReactDOM from 'react-dom';

import { act, render, wait } from '@testing-library/react';
import { UpdateMovie } from './UpdateMovie';
import userEvent from '@testing-library/user-event';
import * as hooks from './useUpdateMovie';


describe('UpdateMovie', () => {
  const movie = {
    id: 337167,
    title: 'Fifty Shades Freed',
    tagline: "Don't miss the climax",
    vote_average: 6.1,
    vote_count: 1195,
    release_date: '2018-02-07',
    poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
    overview:
      'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
    budget: 55000000,
    revenue: 136906000,
    genres: ['Drama', 'Romance'],
    runtime: 106,
  };

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((e) => e) as any;

    const body = document.createElement('body');
    const div = document.createElement('div');
    const spyQuerySelector = jest.fn((selector: string) => {
      if (selector === '#root') {
        return div;
      } else if (selector === 'body') {
        return body;
      }
    });
    Object.defineProperty(global.document, 'querySelector', { value: spyQuerySelector });
  });

  it('Should render component correctly', () => {
    const component = render(<UpdateMovie movie={movie} open={true} onClose={() => null} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('Should interact with the form', async () => {
    const { asFragment, container } = render(<UpdateMovie movie={movie} open={true} onClose={() => null} />);
    await act(async () => await userEvent.type(container.querySelector('input[name=title]') as Element, 'Title Foo'));
    await act(async () => await userEvent.type(container.querySelector('input[name=release_date]') as Element, '2019-09-04'));
    await act(async () => await userEvent.type(container.querySelector('input[name=poster_path]') as Element, 'Movie Preview Foo'));
    act(() => userEvent.selectOptions(container.querySelector('select[name=genres]') as Element, ['baz']));
    await act(async () => await userEvent.type(container.querySelector('input[name=overview]') as Element, 'Overview Foo'));
    await act(async () => await userEvent.type(container.querySelector('input[name=runtime]') as Element, '123'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should call API on submit form', async () => {
    const updateMovieMock = jest.fn().mockImplementation(() => Promise.resolve());
    const clearErrorMock = jest.fn();
    const handleCloseMock = jest.fn();
    const useUpdateMovieMock = jest.spyOn(hooks, 'useUpdateMovie').mockImplementation(() => ({ error: null, clearError: clearErrorMock, updateMovie: updateMovieMock }));

    const { container } = render(<UpdateMovie movie={movie} open={true} onClose={handleCloseMock} />);
    await act(async () => await userEvent.type(container.querySelector('input[name=title]') as Element, 'Title Foo'));
    await act(async () => await userEvent.type(container.querySelector('input[name=release_date]') as Element, '2019-09-04'));
    await act(async () => await userEvent.type(container.querySelector('input[name=poster_path]') as Element, 'Movie Preview Foo'));
    act(() => userEvent.selectOptions(container.querySelector('select[name=genres]') as Element, ['baz']));
    await act(async () => await userEvent.type(container.querySelector('input[name=overview]') as Element, 'Overview Foo'));
    await act(async () => await userEvent.type(container.querySelector('input[name=runtime]') as Element, '123'))
    act(() => userEvent.click(container.querySelector('button[type=submit]') as Element));

    await wait(() => {
      expect(updateMovieMock).toHaveBeenCalledWith({
        ...movie,
        title: 'Title Foo',
        release_date: '2019-09-04',
        poster_path: 'Movie Preview Foo',
        genres: ['baz'],
        overview: 'Overview Foo',
        runtime: '123',
      });
    });
    expect(handleCloseMock).toHaveBeenCalled();
    expect(clearErrorMock).toHaveBeenCalled();

    useUpdateMovieMock.mockRestore();
  });

  it('Should show errors', async () => {
    const useUpdateMovieMock = jest.spyOn(hooks, 'useUpdateMovie').mockImplementation(
      () =>
        ({
          error: {
            title: '"title" error title field',
            genres: '"genres" error genres field',
            overview: '"overview" error overview field',
          },
        } as any)
    );

    const { asFragment } = render(<UpdateMovie movie={movie} open={true} onClose={() => null} />);
    expect(asFragment()).toMatchSnapshot();

    useUpdateMovieMock.mockRestore();
  });
});
