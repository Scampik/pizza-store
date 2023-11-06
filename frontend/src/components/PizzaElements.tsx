import React from 'react';
import { useSelector } from 'react-redux';

import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { selectors } from '../slices/pizzaSlice';

const Pizza: React.FC = () => {
  const data = useSelector(selectors.selectAll)

  return (
    <Container className="pizzaMenu px-0">
      <h1 className="ms-5">Пиццы</h1>
      <Row xs={1} md={2} xl={4} className="g-4 mt-2">
        {data.map((el: any) => (
          <Col key={el.id}>
            <Card className="h-100 btn border border-0" border="light">
              <Card.Img variant="top" src={el.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-start">{el.name}</Card.Title>
                <Card.Text className="text-start">
                  {el.description}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-end flex-wrap">
                  <p className="m-2 fs-5">
                    {`от ${el.price} ₽`}
                  </p>
                  <Button variant="secondary" className="w-50 rounded rounded-pill">
                    Выбрать
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pizza;