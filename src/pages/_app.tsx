import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';

import '../styles/global.scss';
import { ErrorBoundary } from '../components/shared/ErrorBoundary';

const App = ({ Component, pageProps }: any) => (
  <React.Fragment>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
    <ErrorBoundary>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ErrorBoundary>
  </React.Fragment>
);
export default App;
