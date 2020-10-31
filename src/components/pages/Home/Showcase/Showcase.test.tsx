import React from 'react';
import { render } from '@testing-library/react';
import { Showcase } from './Showcase';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Showcase', () => {
  const spyQuerySelector = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global.document, 'querySelector', { value: spyQuerySelector });
  });

  it('Should render component correctly', () => {
    const body = document.createElement('body');
    const div = document.createElement('div');
    spyQuerySelector.mockImplementation((str) => {
      if (str === '#root') {
        return div;
      } else if (str === 'body') {
        return body;
      }
    });
    const store = mockStore({
      movies: {
        filter: {
          genre: 'foo',
          sortBy: 'bar',
          search: 'baz',
        },
      },
    });
    const component = render(
      <Provider store={store}>
        <Showcase />
      </Provider>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
