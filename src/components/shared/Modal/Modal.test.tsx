import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal', () => {
  const spyQuerySelector = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global.document, 'querySelector', { value: spyQuerySelector });
    ReactDOM.createPortal = jest.fn((e) => e) as any;
  });

  it('Should render component correctly', () => {
    const body = document.createElement('body');
    const div = document.createElement('div');
    spyQuerySelector.mockImplementationOnce(() => body);
    spyQuerySelector.mockImplementationOnce(() => div);

    const component = render(
      <Modal open={true}>
        <div>Foo</div>
      </Modal>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
