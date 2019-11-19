import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';

import { enterBtn, spaceBtn } from '../../constants/Keycodes';
import isNumber from '../../functions/isNumber';
import validateEvent from '../../functions/validateEvent';
import { defaultState } from '../../reducers/CombatReducer';
import { applyCombat } from '../../thunk/CombatThunk.jsx';
import Input from '../general/Input.jsx';
import './HitPoints.less';

import HitPointsModal from './HitPointsModal.jsx';

export const HitPoints = ({ hitPoints, onChange }) => {
  const [currentHp, setCurrentHp] = useState(hitPoints);
  const [showCurrentModal, setShowCurrentModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = useCallback(
    event => {
      if (event && event.target) {
        if (event.target.value) {
          onChange('hitPoints', event.target.value.toString());
        } else {
          onChange('hitPoints', defaultState[type]);
        }
      }
    },
    [onChange]
  );

  const handleKeyDown = useCallback(num => onChange('hitPoints', num), [
    onChange,
  ]);

  const handleCurrentChange = useCallback(
    event => {
      if (event && event.target) {
        if (event.target.value) {
          const value = isNumber(event.target.value);
          value ? setCurrentHp(value) : null;
        } else {
          setCurrentHp(defaultState['hitPoints']);
        }
      }
    },
    [setCurrentHp]
  );

  const handleCurrentKeyDown = useCallback(
    num => {
      setCurrentHp(num);
    },
    [setCurrentHp]
  );

  const handleCurrentBtnClick = callback =>
    useCallback(() => {
      setCurrentHp(hp => callback(hp));
    }, [setCurrentHp, currentHp]);

  const handleCurrentBtnKeyDown = callback =>
    useCallback(
      event => {
        if (validateEvent(event)) {
          if (
            !event.shiftKey &&
            !event.ctrlKey &&
            !event.altKey &&
            !event.metaKey
          ) {
            if (
              event.keyCode &&
              (event.keyCode === enterBtn || event.keyCode === spaceBtn)
            ) {
              event.preventDefault();
              setCurrentHp(hp => callback(hp));
            }
          }
        }
      },
      [setCurrentHp, currentHp]
    );

  const handleShowModalClick = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal, setShowModal]);

  const handleModalClick = useCallback(
    num => {
      onChange('hitPoints', hitPoints + num);
      setShowModal(false);
    },
    [setShowModal]
  );

  return (
    <div className="HitPoints">
      <div className="HitPoints__header">
        <div
          className="HitPoints__btn"
          role="button"
          tabIndex="0"
          unselectable="on" //IE9 downwards and Opera
          onKeyDown={handleCurrentBtnKeyDown(num => num + 1)}
          onClick={handleCurrentBtnClick(num => num + 1)}
        >
          +
        </div>
        <div id="hitPointsLabel" className="HitPoints__label">
          Hit Points
        </div>
        <div
          className="HitPoints__btn"
          role="button"
          tabIndex="0"
          unselectable="on" //IE9 downwards and Opera
          onKeyDown={handleCurrentBtnKeyDown(num =>
            num - 1 < 0 ? 0 : num - 1
          )}
          onClick={handleCurrentBtnClick(num => (num - 1 < 0 ? 0 : num - 1))}
        >
          -
        </div>
      </div>
      <Input
        id="hitPoints"
        className="HitPoints__input--largest"
        type="number"
        value={currentHp}
        ariaLabelledBy="hitPointsLabel"
        onKeyDown={handleCurrentKeyDown}
        onChange={handleCurrentChange}
      />
      <div className="HitPoints__total">
        <div id="hitsPointsTotalLabel">Total:</div>
        <Input
          id="hitPoints"
          className="HitPoints__totalInput"
          type="number"
          value={hitPoints}
          ariaLabelledBy="hitsPointsTotalLabel"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
        <button
          className="HitPoints__totalEditBtn"
          onClick={handleShowModalClick}
        >
          <svg
            aria-hidden="true"
            focusable="true"
            data-prefix="fas"
            data-icon="pencil-alt"
            className="svg-inline--fa fa-pencil-alt fa-w-16 HitPoints__totalEditBtnSvg"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={12}
          >
            <path
              fill="currentColor"
              d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
            />
          </svg>
        </button>
        {showModal &&
          createPortal(
            <HitPointsModal
              onClick={handleModalClick}
              onCloseModalClick={handleShowModalClick}
            />,
            document.body
          )}
      </div>
    </div>
  );
};

HitPoints.propTypes = {
  hitPoints: PropTypes.number,
  onChange: PropTypes.func,
};

export const mapStateToProps = ({ combat: { hitPoints } }) => ({
  hitPoints: hitPoints,
});

export const mapDispatchToProps = {
  onChange: applyCombat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HitPoints);
