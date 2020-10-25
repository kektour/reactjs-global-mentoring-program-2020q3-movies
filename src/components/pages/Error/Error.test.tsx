import React from 'react';
import { render } from '@testing-library/react';
import { Error } from './Error';
import { MemoryRouter } from 'react-router-dom';

describe('Error', () => {
  it('Should render component correctly', () => {
    const component = render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
