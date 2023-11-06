/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import AppRoutes from './pages/AppRoutes';
import Categories from './components/Categories';
import PageFooter from './components/PageFooter';
import LanguageSelector from './components/LngSelector';

import { actions as modalActions } from './slices/modalSlice';
import routes from './routes';

const App: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleInDevelopment = () => {
    dispatch(modalActions.openModal({ type: 'inDevelopment' }));
  };

  return (
    <Router>
      <div className="d-flex flex-column h-100 bg-body">
        <Navbar
          collapseOnSelect
          expand="sm"
          className="bg-body-tertiary border border-end text-start"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={handleInDevelopment}>Прямой эфир</Nav.Link>
                <Nav.Link onClick={handleInDevelopment}>Работа в додо</Nav.Link>
                <Nav.Link onClick={handleInDevelopment}>О нас</Nav.Link>
                <Nav.Link onClick={handleInDevelopment}>Контакты</Nav.Link>
              </Nav>
              <Nav className="flex-row flex-wrap ms-sm-auto align-items-center gap-2">
                <LanguageSelector />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <main className="bg-body">
          <AppRoutes />
        </main>
        <PageFooter />
      </div>
    </Router>
  );
};

export default App;