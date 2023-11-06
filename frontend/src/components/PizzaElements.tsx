import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { selectors } from '../slices/pizzaSlice';

const Pizza: React.FC = () => {
  const data = useSelector(selectors.selectAll)
  console.log(data);
  return (
    <div className="pizzaMenu m-4 ">
    <h1>Пиццы</h1>
    <Row xs={1} md={2} xl={4} className="g-4 m-2">
      {data.map((el: any) => (
        <Col key={el.id}>
          <Card className="h-100 btn" border="light">
            <Card.Img variant="top" src={el.image} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
                {el.description}
              </Card.Text>
              <div className="mt-auto d-flex justify-content-between align-items-end flex-wrap">
                <p className="m-2">
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
    </div>
  );
};

export default Pizza;