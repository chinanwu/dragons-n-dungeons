import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import './Checkbox.less';

import Input from './Input.jsx';

export const Checkbox = ({
  id,
  className,
  name,
  checked,
  ariaLabel,
  ariaLabelledBy,
  onChange,
}) => {
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
      id={id}
      className={'Checkbox ' + className}
      name={name ? name : null}
      type="checkbox"
      role="checkbox"
      checked={isChecked}
      ariaChecked={isChecked}
      ariaLabel={ariaLabel}
      ariaLabelledBy={ariaLabelledBy}
      onChange={handleChange}
    />
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
