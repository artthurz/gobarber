import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyles from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter history={history}>
          <Routes />
          <GlobalStyles />
          <ToastContainer autoClose={3000} />
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}
