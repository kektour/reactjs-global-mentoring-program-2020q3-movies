import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Filter } from './Filter';

const mockStore = configureStore();

describe('Filter', () => {
  it('Should render component correctly', () => {
    const store = mockStore({});
    const component = render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
