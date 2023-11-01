// import { Provider } from 'react-redux';
import React from 'react';

import App from './App';
import { initI18next } from './initI18next.js';

const vdom = async () => {
  await initI18next();

  return (
    <App />
  );
};

export default vdom;
