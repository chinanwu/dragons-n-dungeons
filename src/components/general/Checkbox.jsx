import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import './Checkbox.less';

import Input from './Input.jsx';

export const Checkbox = ({ name, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked ? checked : false);

  const handleChange = useCallback(
    event => {
      setIsChecked(event.target.checked);
      onChange ? onChange(event.target.checked) : null;
    },
    [setIsChecked]
  );

  return (
    <Input
      id="checkbox"
      className="Checkbox"
      name={name ? name : null}
      type="checkbox"
      role="checkbox"
      checked={isChecked}
      aria-checked={isChecked}
      onChange={handleChange}
    />
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
