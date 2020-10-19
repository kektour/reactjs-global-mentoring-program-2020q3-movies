import React from 'react';
import { render } from '@testing-library/react';
import { RoundButton } from './RoundButton';

describe('RoundButton', () => {
  it('Should render component correctly', () => {
    const component = render(<RoundButton onClick={() => null} />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
