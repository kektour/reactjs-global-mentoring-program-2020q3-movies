import React from 'react';
import { act, render, wait } from '@testing-library/react';
import { FilterButton } from './FilterButton';
import userEvent from '@testing-library/user-event';

describe('FilterButton', () => {
  it('Should render component correctly', () => {
    const { asFragment } = render(
      <FilterButton
        item={{
          id: 'foo',
          name: 'Foo',
        }}
        isSelected={false}
        onClick={() => null}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render component correctly', async () => {
    const handleClickMock = jest.fn();
    const { container } = render(
      <FilterButton
        item={{
          id: 'foo',
          name: 'Foo',
        }}
        isSelected={false}
        onClick={handleClickMock}
      />
    );
    act(() => userEvent.click(container.querySelector('button') as Element));
    await wait(() => {
      expect(handleClickMock).toHaveBeenCalledWith('foo');
    });
  });
});
