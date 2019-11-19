import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import isNumber from '../../functions/isNumber';
import Input from '../general/Input.jsx';

import './HitPointsModal.less';

export const HitPointsModal = ({ onClick, onCloseModalClick }) => {
  const [input, setInput] = useState(0);

  const handleChange = useCallback(
    event => {
      if (event && event.target) {
        if (event.target.value) {
          const value = isNumber(event.target.value);
          value ? setInput(value) : null;
        } else {
          setInput(0);
        }
      }
    },
    [setInput]
  );

  const handleClick = sign =>
    useCallback(() => {
      onClick(input * sign);
    }, [input]);

  // TODO: No inline styling
  return (
    <div
      className="HitPointsModal"
      style={{
        left: document.documentElement.clientWidth / 2 - 150,
        top: document.documentElement.clientHeight / 2,
      }}
    >
      <div className="HitPointsModal__header">
        <h1 id="hitPointsModalLabel" className="HitPointsModal__label">
          Edit Total Hit Points
        </h1>
        <button
          className="HitPointsModal__closeBtn"
          onClick={onCloseModalClick}
        >
          X
        </button>
      </div>
      <Input
        id="hitPointsModalInput"
        className="HitPointsModal__input"
        type="number"
        value={input}
        ariaLabelledBy="hitPointsModalLabel"
        onChange={handleChange}
      />
      <div>
        <button className="HitPointsModal__addBtn" onClick={handleClick(1)}>
          +
        </button>
        <button className="HitPointsModal__minusBtn" onClick={handleClick(-1)}>
          -
        </button>
      </div>
    </div>
  );
};

HitPointsModal.propTypes = {
  onClick: PropTypes.func,
  onCloseModalClick: PropTypes.func,
};

export default HitPointsModal;
