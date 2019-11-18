import PropTypes from 'prop-types';
import React from 'react';

import Input from './Input.jsx';

import './LabelledInput.less';

export const LabelledInput = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
  onKeyDown,
}) => {
  return (
    <div className="LabelledInput">
      <label className="LabelledInput__label" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        className={'LabelledInput__' + type}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

LabelledInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default LabelledInput;
