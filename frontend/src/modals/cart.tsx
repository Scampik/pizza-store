import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
// import { Link } from 'react-router-dom';

import { Offcanvas } from 'react-bootstrap';
// import PizzaBlock from '../components/PizzaElements';
import emptyCartLogo from '../asserts/img/empty.svg';
import { cartSelect } from '../slices/cartSlice';

import routes from '../routes';

const Cart: React.FC = ({ handleClose, isOpen } : any) => {
  const data = useSelector(cartSelect);
  console.log(data.items.length);
  return (
      <Offcanvas show={isOpen} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {data.items.length !== 0 ? (
              <div>dsds</div>
            ) : (
              <img src={emptyCartLogo} alt="sd" />
            )}
        </Offcanvas.Body>
      </Offcanvas>)
};

export default Cart;