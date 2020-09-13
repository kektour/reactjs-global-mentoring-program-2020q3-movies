import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Home } from './Home';
import { ErrorBoundary } from './shared/ErrorBoundary';

type Props = {};

export const App: React.FC<Props> = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Home />
      </Provider>
    </ErrorBoundary>
  );
};
