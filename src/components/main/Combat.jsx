import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { defaultState } from '../../reducers/CombatReducer';

import { applyCombat } from '../../thunk/CombatThunk.jsx';
import Checkbox from '../general/Checkbox.jsx';
import Input from '../general/Input.jsx';

import './Combat.less';

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

  return (
    <div className="Combat">
      <table className="Combat--table">
        <tbody>
          <tr className="Combat--tr">
            <td className="Combat--td-large">
              <div className="Combat--box Combat--top-large">
                <div className="Combat__label">Death Saves</div>
                <div className="Combat__deathSaves">
                  <div className="Combat--col">
                    <div>Fails</div>
                    <div>Successes</div>
                  </div>
                  <div className="Combat--col">
                    <div className="Combat--row">
                      <Checkbox />
                      <Checkbox />
                      <Checkbox />
                    </div>
                    <div className="Combat--row">
                      <Checkbox />
                      <Checkbox />
                      <Checkbox />
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td className="Combat__inspiration">
              <div className="Combat--box">
                <Checkbox checked={inspiration} />
              </div>
            </td>
            <td className="Combat--td-large">
              <div className="Combat--box Combat--top-large">
                <div className="Combat__label">Armour Class</div>
                <div className="Combat__input">
                  <Input
                    id="armourClass"
                    className="Combat__input--larger"
                    type="text"
                    value={armourClass}
                    onChange={handleChange('armourClass')}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr className="Combat--tr">
            <td className="Combat--td-small Combat--col">
              <div className="Combat--box Combat--mid-space">
                <div className="Combat__label">Passive Perception</div>
                <div className="Combat__input">
                  <Input
                    id="passivePerception"
                    className="Combat__input--larger"
                    type="number"
                    value={passivePerception}
                    onKeyDown={handleKeyDown('passivePerception')}
                    onChange={handleChange('passivePerception')}
                  />
                </div>
              </div>
              <div className="Combat--box Combat__speed">
                <div className="Combat__label">Speed</div>
                <div className="Combat__input">
                  <Input
                    id="speed"
                    className="Combat__input--larger"
                    type="number"
                    value={speed}
                    onKeyDown={handleKeyDown('speed')}
                    onChange={handleChange('speed')}
                  />
                </div>
              </div>
            </td>
            <td className="Combat--td-larger">
              <div className="Combat--box Combat__hitPoints">
                <div className="Combat__label">Hit Points</div>
                <div className="Combat__input">
                  <Input
                    id="hitPoints"
                    className="Combat__input--largest"
                    type="number"
                    value={hitPoints}
                    onKeyDown={handleKeyDown('hitPoints')}
                    onChange={handleChange('hitPoints')}
                  />
                </div>
              </div>
            </td>
            <td className="Combat--td-small">
              <div className="Combat--box Combat--mid-space">
                <div className="Combat__label">Initiative Bonus</div>
                <Input
                  id="initiativeBonus"
                  className="Combat__input--larger"
                  type="number"
                  value={initiativeBonus}
                  onKeyDown={handleKeyDown('initiativeBonus')}
                  onChange={handleChange('initiativeBonus')}
                />
              </div>

              <div className="Combat--box ">
                <div className="Combat__label">Proficiency Bonus</div>
                <div className="Combat__input">
                  <Input
                    id="proficiencyBonus"
                    className="Combat__input--larger"
                    type="number"
                    value={proficiencyBonus}
                    onKeyDown={handleKeyDown('proficiencyBonus')}
                    onChange={handleChange('proficiencyBonus')}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr className="Combat--tr">
            <td className="Combat--td-small">
              <div className="Combat--box">
                <div className="Combat__label">Hit Dice</div>
                <div className="Combat__input">
                  <Input
                    id="hitDice"
                    className="Combat__input--larger"
                    type="text"
                    value={hitDice}
                    onChange={handleChange('hitDice')}
                  />
                </div>
              </div>
            </td>
            <td className="Combat--td-largest">
              <div className="Combat--box">
                <div className="Combat__label">Temporary Hit Points</div>
                <div className="Combat__input">
                  <Input
                    id="tempHitPoints"
                    className="Combat__input--larger"
                    type="number"
                    value={tempHitPoints}
                    onKeyDown={handleKeyDown('tempHitPoints')}
                    onChange={handleChange('tempHitPoints')}
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
