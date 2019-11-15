import React, { useCallback, useState } from 'react';
import getOrder from '../../functions/getOrder';

import './Carousel.less';
import CarouselItem from './CarouselItem.jsx';

export const Carousel = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleClick = useCallback(() => {
    const next = currentItem + 1;
    return next === children.length ? setCurrentItem(0) : setCurrentItem(next);
  }, [currentItem, setCurrentItem]);

  return (
    <div className="CarouselWrapper">
      <div className="Carousel">
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            order={getOrder(children.length, currentItem, index)}
          >
            {child}
          </CarouselItem>
        ))}
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default Carousel;
