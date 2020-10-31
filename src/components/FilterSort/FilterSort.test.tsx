import React from 'react';
import { render } from '@testing-library/react';
import { FilterSort } from './FilterSort';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('FilterSort', () => {
  it('Should render component correctly', () => {
    const store = mockStore({});
    const component = render(
      <Provider store={store}>
        <FilterSort />
      </Provider>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
