import React from 'react';
import PropTypes from 'prop-types';

import './Input.less';

export const Input = ({ id, className, type, onChange, ...props }) => (
  <input
    id={id}
    className={'Input ' + className}
    type={type}
    onChange={onChange}
    {...props}
  />
);

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
