import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('Should render component correctly', () => {
    const component = render(<Logo />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
