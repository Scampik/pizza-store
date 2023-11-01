import React from 'react';

import { Button } from 'react-bootstrap';
import developLogo from '../asserts/stories.jpg';

const MainPage: React.FC = () => {
    const storiesPage = [developLogo,developLogo,developLogo,developLogo,developLogo];
    const assortment = ['Пиццы','Комбо','Закуски','Коктейли','Кофе','Напитки','Десерты','Акци'];
    const pizzaMenu = ['Пепперони','Сырная','Ветчина и сыр','Жюльен'];

  return (
    <div className="container">
      <div className="assortment">
        {assortment.map((el: string) => (
          <Button variant="light">{el}</Button>
        ))}
      </div>
      <div className="stories m-2">
        {storiesPage.map((story: any) => (
          <img src={story} className="mx-2" style={{ width: '18%', height: '20%'}} alt={'sdd'} />
        ))}
      </div>
      <div className="often">
        <h1>Часто заказывают</h1>
        <div className="d-flex justify-content-start" >
          {storiesPage.map((story: any) => (
            <div className="d-flex justify-content-start m-3 shadow rounded">
              <div className="1">
                <img className="mx-2" src={story} style={{ width: '100px', height: '80px'}} alt={'sdd'} />
              </div>
              <div className="m-2">
                <p className="mb-0">name</p>
                <p>price</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pizzaMenu m-4 d-flex justify-content-between">
        <h1>Пиццы</h1>
        <div>

        </div>
        {pizzaMenu.map((el: string) => (
          <div className="d-flex justify-content-between">
            <img className="mx-2" src={developLogo} style={{ width: '100px', height: '80px'}} alt={'sdd'} />
            <Button variant="light">{el}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;