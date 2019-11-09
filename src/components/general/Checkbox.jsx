import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Input from './Input.jsx';

import './Checkbox.less';

export const Checkbox = ({ name, checked }) => {
  const [isChecked, setIsChecked] = useState(checked ? checked : false);

  const handleChange = useCallback(
    event => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked]
  );

  return (
    <Input
      id="checkbox"
      className="Checkbox"
      name={name ? name : null}
      type="checkbox"
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
};

export default Checkbox;
