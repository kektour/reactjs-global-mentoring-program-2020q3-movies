import React from 'react';
import ReactDOM from 'react-dom';
import { act, render, wait } from '@testing-library/react';
import { RemoveMovie } from './RemoveMovie';
import * as hooks from './useRemoveMovie';
import userEvent from '@testing-library/user-event';

describe('RemoveMovie', () => {
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
    const { asFragment } = render(<RemoveMovie id={1} open={true} onClose={() => null} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should call API on button click', async () => {
    const movieId = 1;
    const removeMovieMock = jest.fn().mockImplementation(() => Promise.resolve());
    const handleCloseMock = jest.fn();
    const useRemoveMovieMock = jest.spyOn(hooks, 'useRemoveMovie').mockImplementation(() => ({ removeMovie: removeMovieMock }));

    const { container } = render(<RemoveMovie id={movieId} open={true} onClose={handleCloseMock} />);

    act(() => userEvent.click(container.querySelector('p + button') as Element));

    await wait(() => {
      expect(removeMovieMock).toHaveBeenCalledWith(movieId);
    });
    expect(handleCloseMock).toHaveBeenCalled();

    useRemoveMovieMock.mockRestore();
  });
});
