import React from 'react';
import { render } from '@testing-library/react';
import { NotFoundMovie } from './NotFoundMovie';

describe('NotFoundMovie', () => {
  it('Should render component correctly', () => {
    const component = render(<NotFoundMovie />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
