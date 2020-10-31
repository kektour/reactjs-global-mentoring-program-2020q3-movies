import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn().mockReturnValue({}),
  useHistory: jest.fn().mockReturnValue({ push: jest.fn() }),
}));
const mockStore = configureStore();

describe('Home', () => {
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
        <Home />
      </Provider>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
