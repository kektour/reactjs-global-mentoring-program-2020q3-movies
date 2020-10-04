import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { Error } from './Error';
import { Home } from './Home';
import { ErrorBoundary } from './shared/ErrorBoundary';

export const App: React.FC<{}> = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/films/:id" exact component={Home} />
            <Route path="/search/:query" exact component={Home} />
            <Route component={Error} />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
};
