import React from 'react';
import { render } from '@testing-library/react';
import { Select, Option } from './Select';

describe('Select', () => {
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
      <Select
        options={options}
        nativeSelectProps={{
          defaultValue: 'foo',
        }}
      />
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
