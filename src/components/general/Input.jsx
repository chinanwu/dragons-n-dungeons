import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { downArrow, upArrow } from '../../constants/Keycodes';
import dispatchIfInt from '../../functions/dispatchIfInt';
import validateEvent from '../../functions/validateEvent';

import './Input.less';

export const Input = ({
  id,
  className,
  type,
  defaultInput,
  onChange,
  onKeyDown,
  ...props
}) => {
  const handleKeyDown = useCallback(
    event => {
      if (validateEvent(event)) {
        if (event.target.value && event.keyCode) {
          switch (event.keyCode) {
            case upArrow:
              event.preventDefault();
              dispatchIfInt(event.target.value, value => value + 1)(onKeyDown);
              break;
            case downArrow:
              event.preventDefault();
              dispatchIfInt(event.target.value, value => value - 1)(onKeyDown);
              break;
            default:
              onChange(event);
              break;
          }
        }
      }
    },
    [onChange, onKeyDown]
  );

  // There is a bug with react where when an input is type='number', it allows
  // for zero-padded numbers - e.g. 01. I want to always have those numbers be
  // truncated to just be e.g. 1. Only way to do that is to unfortunately use
  // input type='text'
  return (
    <input
      id={id}
      className={'Input ' + className}
      type={type === 'text' || type === 'number' ? 'text' : type}
      onChange={onChange}
      onKeyDown={type === 'number' ? handleKeyDown : null}
      {...props}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  defaultInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
