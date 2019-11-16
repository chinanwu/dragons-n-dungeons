import PropTypes from 'prop-types';
import React from 'react';

import Input from '../general/Input.jsx';

import './InputBox.less';

export const InputBox = ({
  id,
  className,
  label,
  value,
  type,
  onChange,
  onKeyDown,
}) => (
  <>
    <div id={`${id}Label`} className="InputBox__label">
      {label}
    </div>
    <Input
      id={id}
      className={className}
      type={type}
      value={value}
      ariaLabelledBy={`${id}Label`}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  </>
);

InputBox.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default InputBox;
