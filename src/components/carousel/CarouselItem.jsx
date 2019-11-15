import PropTypes from 'prop-types';
import React from 'react';

import './CarouselItem.less';

export const CarouselItem = ({ order, children }) => {
  return (
    <div className="CarouselItem" style={{ order: order }}>
      {children}
    </div>
  );
};

CarouselItem.propTypes = {
  order: PropTypes.number,
  children: PropTypes.any,
};

export default CarouselItem;
