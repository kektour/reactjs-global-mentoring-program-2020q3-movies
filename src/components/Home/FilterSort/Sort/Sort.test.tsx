import React from 'react';
import { render } from '@testing-library/react';
import { Sort } from './Sort';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Sort', () => {
  it('Should render component correctly', () => {
    const store = mockStore({});
    const component = render(
      <Provider store={store}>
        <Sort />
      </Provider>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
