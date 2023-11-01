import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState('');
  const types = ['Мясные', 'Вегетарианская', 'Острые', 'Все']
  const onClickCategory = (type: string) => {
    setActiveIndex(type);
  };

  return (
    <div className="categories">
      <ul>
        {types.map((type) => (
            <li key={type} onClick={() => onClickCategory(type)} className={activeIndex === type ? 'active' : ''}>
                {type}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;