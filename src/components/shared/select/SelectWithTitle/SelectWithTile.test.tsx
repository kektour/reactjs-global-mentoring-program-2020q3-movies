import React from 'react';
import { render } from '@testing-library/react';
import { Option } from '../Select';
import { SelectWithTitle } from './SelectWithTitle';

describe('SelectWithTitle', () => {
  it('Should render component correctly', () => {
    const options: Array<Option> = [
      {
        label: 'Foo',
        value: 'foo',
      },
      {
        label: 'Bar',
        value: 'bar',
      },
      {
        label: 'Baz',
        value: 'baz',
      },
    ];
    const component = render(
      <SelectWithTitle
        title="Hello"
        options={options}
        nativeSelectProps={{
          defaultValue: 'foo',
        }}
      />
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
