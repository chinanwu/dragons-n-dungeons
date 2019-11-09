import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ id, type, onChange, ...props }) => (
  <input id={id} type={type} onChange={onChange} {...props} />
);

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
