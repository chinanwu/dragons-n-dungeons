import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { defaultState } from '../../reducers/CombatReducer';
import { applyCombat } from '../../thunk/CombatThunk.jsx';
import Checkbox from '../general/Checkbox.jsx';
import './Combat.less';

import HitPoints from './HitPoints.jsx';
import InputBox from './InputBox.jsx';

export const Combat = ({
  inspiration,
  armourClass,
  passivePerception,
  speed,
  initiativeBonus,
  proficiencyBonus,
  hitDice,
  tempHitPoints,
  onChange,
}) => {
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
        <HitPoints />
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
