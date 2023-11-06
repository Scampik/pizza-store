import { Provider } from 'react-redux';
import React from 'react';
import store from './slices/index';

import App from './App';
import ModalWindow from './modals';
import { initI18next } from './initI18next';

const vdom = async () => {
  await initI18next();

  return (
    <Provider store={store}>
      <App />
      <ModalWindow />
    </Provider>
  );
};

export default vdom;
