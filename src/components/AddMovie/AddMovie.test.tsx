import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddMovie } from './AddMovie';
import { act } from 'react-dom/test-utils';
import * as hooks from './useAddMovie';

describe('AddMovie', () => {
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
    const { asFragment } = render(<AddMovie open={true} onClose={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should interact with the form', async () => {
    const { asFragment, container } = render(<AddMovie open={true} onClose={() => null} />);
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Title here'), 'Title Foo'));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Release Date here'), '2019-09-04'));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Movie Preview here'), 'Movie Preview Foo'));
    act(() => userEvent.selectOptions(container.querySelector('select[name=genres]') as Element, ['baz']));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Overview here'), 'Overview Foo'));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Runtime here'), '123'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should call API on submit form', async () => {
    const createMovieMock = jest.fn().mockImplementation(() => Promise.resolve());
    const clearErrorMock = jest.fn();
    const handleCloseMock = jest.fn();
    const useAddMovieMock = jest.spyOn(hooks, 'useAddMovie').mockImplementation(() => ({ error: null, clearError: clearErrorMock, createMovie: createMovieMock }));

    const { container } = render(<AddMovie open={true} onClose={handleCloseMock} />);
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Title here'), 'Title Foo'));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Release Date here'), '2019-09-04'));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Movie Preview here'), 'Movie Preview Foo'));
    act(() => userEvent.selectOptions(container.querySelector('select[name=genres]') as Element, ['baz']));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Overview here'), 'Overview Foo'));
    await act(async () => await userEvent.type(screen.getByPlaceholderText('Runtime here'), '123'));
    act(() => userEvent.click(container.querySelector('button[type=submit]') as Element));

    await wait(() => {
      expect(createMovieMock).toHaveBeenCalledWith({
        tagline: 'tagline',
        vote_average: 0,
        vote_count: 0,
        budget: 0,
        revenue: 0,
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

    useAddMovieMock.mockRestore();
  });

  it('Should show errors', async () => {
    const useAddMovieMock = jest.spyOn(hooks, 'useAddMovie').mockImplementation(
      () =>
        ({
          error: {
            title: '"title" error title field',
            genres: '"genres" error genres field',
            overview: '"overview" error overview field',
          },
        } as any)
    );

    const { asFragment } = render(<AddMovie open={true} onClose={() => null} />);
    expect(asFragment()).toMatchSnapshot();

    useAddMovieMock.mockRestore();
  });
});
