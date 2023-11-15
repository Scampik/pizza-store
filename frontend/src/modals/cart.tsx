import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Offcanvas, ButtonGroup } from 'react-bootstrap';
import emptyCartLogo from '../asserts/img/empty.svg';
import { cartSelect, clearItems, decrCount, incCount } from '../slices/cartSlice';
import { actions as modalActions } from '../slices/modalSlice';
import { CartItem } from '../slices/cartSlice';

const Cart: React.FC = ({ handleClose, isOpen } : any) => {
  const dispatch = useDispatch();
  const data = useSelector(cartSelect);

  const handleMinus = (item: CartItem) => {
    console.log(item);
    dispatch(decrCount(item));
  };

  const handlePlus = (item: CartItem) => {
    console.log(item);
    dispatch(incCount(item));
  };

  const handleDone = () => {
    dispatch(modalActions.openModal({ type: 'purchase' }));
    dispatch(clearItems());
  };

  const emptyCart = (
    <div className="d-flex align-items-center justify-content-center h-75 flex-column">
      <img src={emptyCartLogo} alt="sd" />
      <p className="fs-5 fw-semibold text-center">Слишком пусто, прямо как в твоем желудке</p>
    </div>
  );

  const cartElement = (
    <>
      {data.items.map((el: any) => (
        <article className="art my-3 bg-body" key={el.id}>
          <div className="row justify-content-beetwen">
            <div
              className="col-md-3 m-3 me-1 mb-1"
            >
              <img
                alt="data"
                title="data"
                className="img"
                style={{
                  height: "5rem",
                  width: "5rem",
                }}
                src={el.image}
              />
            </div>
            <div className="col-md-7 m-3 ms-0 align-self-center ps-0">
              <h5 className="">{el.name}</h5>
              <section className="">
                <div className="param">{el.type}</div>
              </section>
            </div>
          </div>
          <div className="d-flex justify-content-between border-top m-2">
            <div className="01 m-3">
              <div className="current fw-semibold">{el.price * el.count} ₽</div>
            </div>
            <div className="02 m-3">
            <ButtonGroup aria-label="Basic example">
              <Button variant="light" onClick={() => handleMinus(el)}>-</Button>
              <Button variant="light">{el.count}</Button>
              <Button variant="light" onClick={() => handlePlus(el)}>+</Button>
            </ButtonGroup>
            </div>
          </div>  
        </article>))}
    </>
  );

  return (
      <Offcanvas show={isOpen} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="bg-body-tertiary border-bottom">
            <Offcanvas.Title>{data.totalPrice? `${data.items.length} товар на ${data.totalPrice} ₽`: null}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-body-secondary p-0">
            {data.items.length !== 0 ? (
              <div className="">
                <section className="w-100 mb-5">
                  {cartElement}
                </section>
                <section className="w-100 bg-body-secondary position-absolute bottom-0 start-0 p-2">
                  <Button
                    className="w-100 rounded rounded-pill px-4 py-2 fw-medium"
                    variant="warning"
                    onClick={handleDone}
                  >
                    Заказать
                  </Button>
                </section>
              </div>
            ) : (
              emptyCart
            )}
        </Offcanvas.Body>
      </Offcanvas>)
};

export default Cart;