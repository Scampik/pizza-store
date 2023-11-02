import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import MainPage from './MainPage';
import PageNotFound from './PageNotFound';

import routes from '../routes';

const AppRoutes = () => (
  <>
    <Routes>
      <Route path={routes.mainPage()} element={<MainPage />} />
      <Route path={routes.notFoundPage()} element={<PageNotFound />} />
    </Routes>
  </>
);

export default AppRoutes;
