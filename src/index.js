import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Application from '@/App';
import { store, persistor } from '@/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
