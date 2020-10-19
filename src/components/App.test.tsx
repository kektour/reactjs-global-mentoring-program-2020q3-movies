import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  const spyQuerySelector = jest.fn();

  beforeAll(() => {
    Object.defineProperty(global.document, 'querySelector', { value: spyQuerySelector });
  });

  it('Should render component correctly', () => {
    const body = document.createElement('body');
    const div = document.createElement('div');
    spyQuerySelector.mockImplementation((str) => {
      if (str === '#root') {
        return div;
      } else if (str === 'body') {
        return body;
      }
    });

    const component = render(<App />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
