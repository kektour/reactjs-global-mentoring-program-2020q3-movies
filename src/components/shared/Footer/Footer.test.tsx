import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('Should render component correctly', () => {
    const component = render(<Footer />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
