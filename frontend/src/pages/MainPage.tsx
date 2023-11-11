import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import PizzaBlock from '../components/PizzaElements';
import developLogo from '../asserts/img/logo.png';
import { getPizza } from '../slices/pizzaSlice';
import { cartSelect } from '../slices/cartSlice';

import routes from '../routes';

const MainPage: React.FC = () => {
  const assortment = ['Пиццы','Комбо','Закуски','Коктейли','Кофе','Напитки','Десерты','Акции'];
  const dispatch = useDispatch();
  const data = useSelector(cartSelect);
  console.log(data.totalPrice);
  useEffect(() => {
    console.log('dispatch');
    dispatch(getPizza() as any)
      .then(unwrapResult)
      .catch((error: any) => {
        console.log('err disp', error);
        if (error.status === 401) {
          console.log('user login problem');
        } if (error.status === 0) {
          console.log('networkProblem');
        }
      });
  }, [dispatch]);

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const navbarElement = document.querySelector('.navbar') as HTMLDivElement;
      if (navbarElement) {
        if (scrollTop >= navbarElement.offsetHeight) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (sectionId: any) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {showNavbar ? (
        <div style={{height: "53px"}}>
          {''}
        </div>) 
        :
        null
      }
      <Navbar
        fixed={showNavbar ? 'top' : undefined}
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary bg-opacity-75"
      >
        <Container>
          <Navbar.Brand as={Link} to={routes.mainPage()} className="fs-4 fw-semibold ms-2">
            <img
              src={developLogo}
              height={40}
              width={40}
              className="rounded-circle"
              alt={'ss'}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav>
                {assortment.map((el: string) => (
                  <Nav.Link key={el} onClick={() => handleClick(el)}>{el}</Nav.Link>
                ))}
            </Nav>
            <Nav className="flex-row flex-wrap ms-sm-auto align-items-center gap-2">
              <Button className="rounded rounded-pill px-4 py-2 fw-medium" variant="warning">Корзина {`${data.totalPrice} ₽`}</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PizzaBlock />
    </div>
  );
};

export default MainPage;