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
  const [size, setSize] = useState<string>('middle');
  console.log(item);

  const closeModal = () => {
    setSize('middle');
    handleClose();
  };

  const handleBuy = (item: Pizza) => {
    dispatch(addItem(item));
    setSize('middle');
    handleClose();
  };

  return (
    <Modal centered onHide={closeModal} show={isOpen} size="lg">
      <Modal.Body className="row justify-content-center m-3">
        <Card style={{ width: '20rem' }} className="col-md-3 border-0">
          <Card.Img variant="left" src={item.image} />
        </Card>
        <Card style={{ width: '20rem' }} className="col-md-3 p-0 border-0">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text className="w-100">
              {item.description}
            </Card.Text>
            <ButtonGroup aria-label="Basic example" className="mb-2 border rounded rounded-pill d-flex justify-content-center">
              <Button
                variant={`${size === 'small'? 'secondary border':'light'}`}
                onClick={() => setSize('small')}
              >
                Маленькая
              </Button>
              <Button
                variant={`${size === 'middle'? 'secondary border':'light'}`}
                onClick={() => setSize('middle')}
              >
                Средняя
              </Button>
              <Button
                variant={`${size === 'large'? 'secondary border':'light'}`}
                onClick={() => setSize('large')}
              >
                Большая
              </Button>
            </ButtonGroup>
            <Button
              className="rounded rounded-pill w-100 mt-auto h-25"
              variant="primary"
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
