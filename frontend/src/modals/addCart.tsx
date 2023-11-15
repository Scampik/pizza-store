/* eslint-disable no-unused-vars */
// import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Cart3 } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';

import { addItem } from '../slices/cartSlice';
import { Pizza } from '../slices/pizzaSlice';

const AddCart: React.FC = ({ handleClose, isOpen, item } : any) => {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const [sizePizza, setSizePizza] = useState<number>(1);
  const typeSizes = ['Маленькая 25 см', 'Средняя 30 см', 'Большая 35см'];

  const closeModal = () => {
    setSizePizza(1);
    handleClose();
  };

  const handleBuy = (item: Pizza) => {
    const { id, name, price, image, type, description} = item;
    const newItem: Pizza = {
      id,
      name,
      price,
      image,
      type,
      size: typeSizes[sizePizza],
      description,
    };
    dispatch(addItem(newItem));
    setSizePizza(1);
    handleClose();
  };

  return (
    <Modal centered onHide={closeModal} show={isOpen} size="lg">
      <Modal.Body className="row justify-content-center m-3">
        <Card style={{ width: '20rem' }} className="col-md-1 border-0">
          <Card.Img variant="left" src={item.image} />
        </Card>
        <Card style={{ width: '20rem' }} className="col-md-1 p-0 border-0">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className="w-100">
              {item.description}
            </Card.Text>
              <ul className="rounded d-flex justify-content-center p-2 bg-body-secondary text-center">
                <li 
                  className={`dropdown-item rounded ${sizePizza === 0? 'bg-light':''}`}
                  onClick={() => setSizePizza(0)}
                >25 см</li>
                <li
                  className={`dropdown-item rounded ${sizePizza === 1? 'bg-light':''}`}
                  onClick={() => setSizePizza(1)}
                >30 см</li>
                <li
                  className={`dropdown-item rounded ${sizePizza === 2? 'bg-light':''}`}
                  onClick={() => setSizePizza(2)}
                >35 см</li>
              </ul>
            <Button
              className="rounded rounded-pill w-100 mt-auto h-25"
              variant="success"
              onClick={() => handleBuy(item)}
            >
              <Cart3 />
              {' '}
              {`Добавить в корзину за ${item.price} ₽`}
            </Button>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddCart;
