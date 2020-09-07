import React from 'react';
import { Home } from './Home';
import { ErrorBoundary } from './shared/ErrorBoundary';

type Props = {};

export const App: React.FC<Props> = () => {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
};
