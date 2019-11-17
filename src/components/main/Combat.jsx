import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';

import { enterBtn, spaceBtn } from '../../constants/Keycodes';
import isNumber from '../../functions/isNumber';
import validateEvent from '../../functions/validateEvent';
import { defaultState } from '../../reducers/CombatReducer';
import { applyCombat } from '../../thunk/CombatThunk.jsx';
import Checkbox from '../general/Checkbox.jsx';
import Input from '../general/Input.jsx';
import './Combat.less';

import InputBox from './InputBox.jsx';

export const Combat = ({
  inspiration,
  armourClass,
  passivePerception,
  speed,
  hitPoints,
  initiativeBonus,
  proficiencyBonus,
  hitDice,
  tempHitPoints,
  onChange,
}) => {
  const [dynamicHitPoints, setDynamicHitPoints] = useState(hitPoints);
  const [showHitPointsTotalModal, setShowHitPointsTotalModal] = useState(false);

  const handleChange = type =>
    useCallback(
      event => {
        if (event && event.target) {
          if (event.target.value) {
            onChange(type, event.target.value.toString());
          } else {
            onChange(type, defaultState[type]);
          }
        }
      },
      [onChange]
    );

  const handleKeyDown = type =>
    useCallback(num => onChange(type, num), [onChange]);

  const handleDynamicHitPointsChange = useCallback(event => {
    if (event && event.target) {
      if (event.target.value) {
        const value = isNumber(event.target.value);
        value ? setDynamicHitPoints(value) : null;
      } else {
        setDynamicHitPoints(defaultState['hitPoints']);
      }
    }
  }, []);

  const handleDynamicHitPointsKeyDown = useCallback(
    num => {
      setDynamicHitPoints(num);
    },
    [setDynamicHitPoints]
  );

  const handleHitPointsClick = callback =>
    useCallback(() => {
      setDynamicHitPoints(dynamicHitPoints => callback(dynamicHitPoints));
    }, [setDynamicHitPoints, dynamicHitPoints]);

  const handleHitPointsKeyDown = callback =>
    useCallback(
      event => {
        if (validateEvent(event)) {
          if (
            !event.shiftKey &&
            !event.ctrlKey &&
            !event.altKey &&
            !event.metaKey
          ) {
            if (event.keyCode) {
              if (event.keyCode === enterBtn || event.keyCode === spaceBtn) {
                event.preventDefault();
                setDynamicHitPoints(dynamicHitPoints =>
                  callback(dynamicHitPoints)
                );
              }
            }
          }
        }
      },
      [setDynamicHitPoints, dynamicHitPoints]
    );

  const handleHitPointsTotalClick = useCallback(() => {
    setShowHitPointsTotalModal(!showHitPointsTotalModal);
  }, [showHitPointsTotalModal, setShowHitPointsTotalModal]);

  // https://fontawesome.com/license
  // SVG below is from font awesome

  return (
    <div className="Combat">
      <div className="Combat__top">
        <div className="Combat__deathSaves">
          <div className="Combat__label">Death Saves</div>
          <div className="Combat__deathSavesContent">
            <div id="deathSaveFailLabel" className="Combat__deathSaveFailLabel">
              Fails
            </div>
            <div
              id="deathSaveSuccessLabel"
              className="Combat__deathSaveSuccessLabel"
            >
              Successes
            </div>
            <div className="Combat__deathSavesFailCheckboxes">
              <Checkbox
                id="deathSaveFail-1"
                ariaLabelledBy="deathSaveFailLabel"
              />
              <Checkbox
                id="deathSaveFail-2"
                ariaLabelledBy="deathSaveFailLabel"
              />
              <Checkbox
                id="deathSaveFail-3"
                ariaLabelledBy="deathSaveFailLabel"
              />
            </div>
            <div className="Combat__deathSavesSuccessCheckboxes">
              <Checkbox
                id="deathSaveSuccess-1"
                ariaLabelledBy="deathSaveSuccessLabel"
              />
              <Checkbox
                id="deathSaveSuccess-2"
                ariaLabelledBy="deathSaveSuccessLabel"
              />
              <Checkbox
                id="deathSaveSuccess-3"
                ariaLabelledBy="deathSaveSuccessLabel"
              />
            </div>
          </div>
        </div>
        <div className="Combat__inspiration">
          <div id="inspirationLabel" className="Combat__label">
            Inspiration
          </div>
          <div className="Combat__inspirationCheckbox">
            <Checkbox
              id="inspirationCheckbox"
              ariaLabelledBy="inspirationLabel"
              checked={inspiration}
            />
          </div>
        </div>
        <div className="Combat__armourClass">
          <InputBox
            id="armourClass"
            className="Combat__input--larger"
            label="Armour Class"
            value={armourClass}
            type="text"
            onChange={handleChange('armourClass')}
          />
        </div>
      </div>
      <div className="Combat__middle">
        <div className="Combat__middleSide">
          <div className="Combat__passivePerception">
            <InputBox
              id="passivePerception"
              className="Combat__input--larger"
              label="Passive Perception"
              value={passivePerception}
              type="number"
              onKeyDown={handleKeyDown('passivePerception')}
              onChange={handleChange('passivePerception')}
            />
          </div>
          <div className="Combat__speed">
            <InputBox
              id="speed"
              className="Combat__input--larger"
              label="Speed"
              value={speed}
              type="number"
              onKeyDown={handleKeyDown('speed')}
              onChange={handleChange('speed')}
            />
          </div>
        </div>
        <div className="Combat__hitPoints">
          <div className="Combat__hitPointsHeader">
            <div
              className="Combat__hitPointsBtn"
              role="button"
              tabIndex="0"
              unselectable="on" //IE9 downwards and Opera
              onKeyDown={handleHitPointsKeyDown(num => num + 1)}
              onClick={handleHitPointsClick(num => num + 1)}
            >
              +
            </div>
            <div id="hitPointsLabel" className="Combat__label">
              Hit Points
            </div>
            <div
              className="Combat__hitPointsBtn"
              role="button"
              tabIndex="0"
              unselectable="on" //IE9 downwards and Opera
              onKeyDown={handleHitPointsKeyDown(num =>
                num - 1 < 0 ? 0 : num - 1
              )}
              onClick={handleHitPointsClick(num => (num - 1 < 0 ? 0 : num - 1))}
            >
              -
            </div>
          </div>
          <div className="Combat__hitPointsInput">
            <Input
              id="hitPoints"
              className="Combat__input--largest"
              type="number"
              value={dynamicHitPoints}
              ariaLabelledBy="hitPointsLabel"
              onKeyDown={handleDynamicHitPointsKeyDown}
              onChange={handleDynamicHitPointsChange}
            />
          </div>
          <div className="Combat__hitPointsTotal">
            <div id="hitsPointsTotalLabel">Total:</div>
            <Input
              id="hitPoints"
              className="Combat__hitPointsTotalInput"
              type="number"
              value={hitPoints}
              ariaLabelledBy="hitsPointsTotalLabel"
              onKeyDown={handleKeyDown('hitPoints')}
              onChange={handleChange('hitPoints')}
            />
            <button
              className="Combat__hitPointsTotalEditBtn"
              onClick={handleHitPointsTotalClick}
            >
              <svg
                aria-hidden="true"
                focusable="true"
                data-prefix="fas"
                data-icon="pencil-alt"
                className="svg-inline--fa fa-pencil-alt fa-w-16 Combat__hitPointsTotalEditBtnSvg"
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
            {showHitPointsTotalModal &&
              createPortal(<div>test</div>, document.body)}
          </div>
        </div>
        <div className="Combat__middleSide">
          <div className="Combat__initiativeBonus">
            <InputBox
              id="initiativeBonus"
              className="Combat__input--larger"
              label="Initiative Bonus"
              value={initiativeBonus}
              type="number"
              onKeyDown={handleKeyDown('initiativeBonus')}
              onChange={handleChange('initiativeBonus')}
            />
          </div>
          <div className="Combat__proficiencyBonus">
            <InputBox
              id="proficiencyBonus"
              className="Combat__input--larger"
              label="Proficiency Bonus"
              value={proficiencyBonus}
              type="number"
              onKeyDown={handleKeyDown('proficiencyBonus')}
              onChange={handleChange('proficiencyBonus')}
            />
          </div>
        </div>
      </div>
      <div className="Combat__bottom">
        <div className="Combat__hitDice">
          <InputBox
            id="hitDice"
            className="Combat__input--larger"
            label="Hit Dice"
            value={hitDice}
            type="text"
            onChange={handleChange('hitDice')}
          />
        </div>
        <div className="Combat__tempHitPoints">
          <InputBox
            id="tempHitPoints"
            className="Combat__input--larger"
            label="Temporary Hit Points"
            value={tempHitPoints}
            type="number"
            onKeyDown={handleKeyDown('tempHitPoints')}
            onChange={handleChange('tempHitPoints')}
          />
        </div>
      </div>
    </div>
  );
};

Combat.propTypes = {
  inspiration: PropTypes.bool,
  armourClass: PropTypes.number,
  passivePerception: PropTypes.number,
  speed: PropTypes.number,
  hitPoints: PropTypes.number,
  initiativeBonus: PropTypes.number,
  proficiencyBonus: PropTypes.number,
  hitDice: PropTypes.string,
  tempHitPoints: PropTypes.number,
  onChange: PropTypes.func,
};

export const mapStateToProps = ({
  combat: {
    inspiration,
    armourClass,
    passivePerception,
    speed,
    hitPoints,
    initiativeBonus,
    proficiencyBonus,
    hitDice,
    tempHitPoints,
  },
}) => ({
  inspiration: inspiration,
  armourClass: armourClass,
  passivePerception: passivePerception,
  speed: speed,
  hitPoints: hitPoints,
  initiativeBonus: initiativeBonus,
  proficiencyBonus: proficiencyBonus,
  hitDice: hitDice,
  tempHitPoints: tempHitPoints,
});

export const mapDispatchToProps = {
  onChange: applyCombat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Combat);
