/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AppRoutes from './pages/AppRoutes';
import Categories from './components/Categories';
import PageFooter from './components/PageFooter';
import LanguageSelector from './components/LngSelector';

import { SunFill } from 'react-bootstrap-icons';
import routes from './routes';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
  <Router>
      <div className="d-flex flex-column h-100 bg-body">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="bg-body-tertiary"
        >
          <Container>
            <Navbar.Brand as={Link} to={routes.mainPage()} className="fs-4 fw-semibold mr-auto">
              <SunFill />
              {t('siteName')}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Прямой эфир</Nav.Link>
                <Nav.Link href="#home">Работа в додо</Nav.Link>
                <Nav.Link href="#home">О нас</Nav.Link>
                <Nav.Link href="#home">Контакты</Nav.Link>
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