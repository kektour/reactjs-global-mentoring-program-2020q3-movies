import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('Should render component correctly', () => {
    const component = render(<Input title="Foo" nativeInputProps={{ defaultValue: 'Bar' }} />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
