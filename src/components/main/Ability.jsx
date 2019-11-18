import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';

import { ABILITY_SKILLS } from '../../constants/Abilities';
import isNumber from '../../functions/isNumber';
import validateEvent from '../../functions/validateEvent';
import { defaultScore } from '../../reducers/AbilityReducer';
import { applyAbilityProxy } from '../../thunk/AbilityThunk.jsx';
import Input from '../general/Input.jsx';

import './Ability.less';
import { Skill } from './Skill.jsx';

export const Ability = ({
  id,
  name,
  score,
  modifier,
  proficiencyBonus,
  onChange,
}) => {
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

  const handleKeyDown = useCallback(
    num => {
      const validNum = num > 30 ? 30 : num < 0 ? 0 : num;
      onChange(name, validNum);
    },
    [onChange]
  );

  return (
    <div id={id} className="Ability">
      <div className="Ability__name">{name}</div>
      <div className="Ability__content">
        <div className="Ability__score">
          <div>
            <div id="abilityScoreLabel" className="Ability__scoreLabel">
              Ability Score
            </div>

            <Input
              id="abilityScore"
              className="AbilityScore"
              type="number"
              maxLength={2}
              value={score}
              ariaLabelledBy="abilityScoreLabel"
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="Ability__modifierLabel">Modifier</div>
            <div className="Ability__modifier">{modifier}</div>
          </div>
        </div>
        <div className="Ability__skills">
          {ABILITY_SKILLS[name.toLowerCase()].map(skill => (
            <Skill
              key={skill}
              skill={skill}
              modifier={modifier}
              proficiencyBonus={proficiencyBonus}
            />
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

// TODO:
// - AbilityScore:focus styling?
// - Maybe in the future, instead of having to make everything lowercase,
//  it is set as lowercase in the constants file, and css styling will deal with it?
