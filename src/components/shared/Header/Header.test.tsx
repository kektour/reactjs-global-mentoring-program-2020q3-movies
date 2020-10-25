import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('Should render component correctly', () => {
    const component = render(<Header />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
