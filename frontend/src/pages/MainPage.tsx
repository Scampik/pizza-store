import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { Button } from 'react-bootstrap';
import Pizza from '../components/PizzaElements';
// import developLogo from '../asserts/stories.jpg';
import { getPizza } from '../slices/pizzaSlice';

const MainPage: React.FC = () => {
    // const storiesPage = [developLogo,developLogo,developLogo,developLogo,developLogo];
    const assortment = ['Пиццы','Комбо','Закуски','Коктейли','Кофе','Напитки','Десерты','Акци'];
    const dispatch = useDispatch();

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
          // return dispatch(setStatus('failed'));
        }
        // return dispatch(setStatus('failed'));
      });
  }, [dispatch]);

  return (
    <div className="container">
      <div className="assortment">
        {assortment.map((el: string) => (
          <Button key={el} variant="light">{el}</Button>
        ))}
      </div>
      {/* <div className="stories m-2">
        {storiesPage.map((story: any) => (
          <img key={story} src={story} className="mx-2" style={{ width: '18%', height: '20%'}} alt={'sdd'} />
        ))}
      </div> */}
      {/* <div className="often">
        <h1>Часто заказывают</h1>
        <div className="d-flex justify-content-start" >
          {storiesPage.map((story: any) => (
            <div key={1} className="d-flex justify-content-start m-3 shadow rounded">
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
      </div> */}
      <Pizza />
    </div>
  );
};

export default MainPage;