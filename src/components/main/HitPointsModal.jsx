import React from 'react';
import Input from '../general/Input.jsx';

import './HitPointsModal.less';

export const HitPointsModal = () => (
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
      <button className="HitPointsModal__closeBtn">X</button>
    </div>
    <Input
      id="hitPointsModalInput"
      className="HitPointsModal__input"
      type="number"
      placeholder={0}
      ariaLabelledBy="hitPointsModalLabel"
    />
    <div>
      <button className="HitPointsModal__addBtn">+</button>
      <button className="HitPointsModal__minusBtn">-</button>
    </div>
  </div>
);

HitPointsModal.propTypes = {};

export default HitPointsModal;
