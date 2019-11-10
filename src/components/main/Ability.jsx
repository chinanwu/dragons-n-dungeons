import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import { ABILITY_SKILLS } from '../../constants/Abilities';
import isNumber from '../../functions/isNumber';
import validateEvent from '../../functions/validateEvent';
import { defaultScore } from '../../reducers/AbilityReducer';
import { applyAbilityProxy } from '../../thunk/AbilityThunk.jsx';
import Checkbox from '../general/Checkbox.jsx';
import Input from '../general/Input.jsx';

import './Ability.less';

export const Ability = ({
  id,
  name,
  score,
  modifier,
  proficiencyBonus,
  onChange,
}) => {
  const [isProficient, setIsProficient] = useState(false);

  const handleChange = useCallback(
    event => {
      if (validateEvent(event)) {
        if (event.target.value) {
          let num = isNumber(event.target.value);
          if (num) {
            num = num > 30 ? 30 : num < 0 ? 0 : num;
            onChange(name, num);
          }
        } else {
          onChange(name, defaultScore);
        }
      }
    },
    [onChange]
  );

  const handleProficiencyChange = useCallback(
    checked => {
      setIsProficient(checked);
    },
    [setIsProficient]
  );

  const handleKeyDown = useCallback(
    num => {
      const validNum = num > 30 ? 30 : num < 0 ? 0 : num;
      onChange(name, validNum);
    },
    [onChange]
  );

  const calculateModifier = () =>
    isProficient ? modifier + proficiencyBonus : modifier;

  return (
    <div id={id} className="Ability">
      <div className="AbilityName">{name}</div>
      <div className="AbilityContent">
        <div className="Ability--left">
          <Input
            id="abilityScore"
            className="AbilityScore"
            type="number"
            maxLength={2}
            value={score}
            defaultInput={defaultScore}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          <div className="AbilityModifier">{modifier}</div>
        </div>
        <div className="Ability--right">
          {ABILITY_SKILLS[name.toLowerCase()].map(skill => (
            <div className="AbilitySkill" key={skill}>
              <Checkbox
                checked={isProficient}
                onChange={handleProficiencyChange}
              />
              <div>{calculateModifier()}</div>
              <div>{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Ability.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  score: PropTypes.number,
  modifier: PropTypes.number,
  proficiencyBonus: PropTypes.number,
  onChange: PropTypes.func,
};

// TODO: Maybe in the future, instead of having to make everything lowercase,
//  it is set as lowercase in the constants file, and css styling will deal with it?
export const mapStateToProps = (
  { ability, combat: { proficiencyBonus } },
  { name }
) => ({
  score: ability[name.toLowerCase()].score,
  modifier: ability[name.toLowerCase()].modifier,
  proficiencyBonus: proficiencyBonus,
});

export const mapDispatchToProps = {
  onChange: applyAbilityProxy,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ability);
