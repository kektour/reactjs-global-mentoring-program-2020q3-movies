import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('Should render component correctly', () => {
    const { asFragment } = render(
      <ErrorBoundary>
        <div>Foo</div>
      </ErrorBoundary>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render error message', () => {
    const StubComponent: React.FC<{}> = () => {
      throw new Error('Foo');
    };
    const { asFragment } = render(
      <ErrorBoundary>
        <StubComponent />
      </ErrorBoundary>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
