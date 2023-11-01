import React from 'react';


const MainPage: React.FC = () => {
    const pizzas = [1,2,3];
    // const skeletons = [1,2,3,4];
    // const status = 'done';

  return (
    <div className="container">
      <div className="">
        Categories
        Sort
      </div>

      <div className="">
        <h2 className="">Все пиццы</h2>
      </div>
         {pizzas}
    </div>
  );
};

export default MainPage;