/* eslint-disable no-unused-vars */
// import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { Cart3, CheckCircle } from 'react-bootstrap-icons';

const Purchase: React.FC = ({ handleClose, isOpen } : any) => {
  // const { t } = useTranslation();
  const [status, setStatus] = useState<string>("before");

  const handlePurchase = () => {
    setStatus('during');
    setTimeout(() => {
      setStatus('after');
    }, 1000);
  };

  const handleCloseModal = () => {
    handleClose();
    setTimeout(() => {
      setStatus('before');
    }, 200);
  };

  const Done: React.FC = () => (
    <div className="d-flex flex-column gap-3 text-center">
      <CheckCircle className="bi fs-1 align-self-center text-success m-3" />
      <p>Done!</p>
      <Button onClick={() => handleCloseModal()} type="button">
        Close
      </Button>
    </div>
  );

  const Cart: React.FC = () => (
    <div className="d-flex flex-column gap-3 text-center">
      <Cart3 className="bi fs-1 align-self-center text-primary m-3" />
      <p>Purchase</p>
      <Button onClick={() => handlePurchase()} type="button">
        Purchase
      </Button>
    </div>
  );

  const Wait: React.FC = () => (
    <div className="d-flex flex-column gap-3 text-center">
      <Spinner animation="border" role="status" className="bi fs-1 align-self-center text-primary m-3">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  const comp: { [key: string]: React.ComponentType } = {
    before: Cart,
    during: Wait,
    after: Done,
  };

  const Component = comp[status];

  return (
    <Modal centered onHide={handleClose} show={isOpen} size="sm">
      <Modal.Body>
        <Component />
      </Modal.Body>
    </Modal>
  );
};

export default Purchase;
