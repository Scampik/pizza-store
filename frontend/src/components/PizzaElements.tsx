import React from 'react';

import { Button } from 'react-bootstrap';
import developLogo from '../asserts/stories.jpg';

const Pizza: React.FC = () => {
    const pizzaMenu = ['Пепперони','Сырная','Ветчина и сыр','Жюльен'];

  return (
    <div className="pizzaMenu m-4">
    <h1>Пиццы</h1>
    <div className="d-flex justify-content-between">
        {pizzaMenu.map((el: string) => (
        <div key={el} className="d-flex justify-content-between">
            <img className="mx-2" src={developLogo} style={{ width: '100px', height: '80px'}} alt={'sdd'} />
            <Button variant="light">{el}</Button>
        </div>
        ))}
    </div>
    </div>
  );
};

export default Pizza;