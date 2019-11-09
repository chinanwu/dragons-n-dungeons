import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ABILITY_SKILLS } from '../../constants/Abilities';
import { applyAbilityProxy } from '../../thunk/AbilityThunk.jsx';
import { defaultScore } from '../../reducers/AbilityReducer';
import Input from '../general/Input.jsx';
import { Skill } from './Skill.jsx';

import './Ability.less';

export const Ability = ({ id, name, score, modifier, onChange }) => {
  const handleChange = useCallback(
    event => {
      if (event && event.target) {
        if (event.target.value) {
          let num = parseInt(event.target.value);
          if (num) {
            // TODO: If greater than max or less than min, do special effect?
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

  return (
    <div id={id} className="Ability">
      <div className="AbilityName">{name}</div>
      <div className="AbilityContent">
        <div className="Ability--left">
          <Input
            id="abilityScore"
            className="AbilityScore"
            type="text"
            maxLength={2}
            value={score}
            onChange={handleChange}
          />
          <div className="AbilityModifier">{modifier}</div>
        </div>
        <div className="Ability--right">
          {ABILITY_SKILLS[name.toLowerCase()].map(skill => (
            <Skill
              id={name.toLowerCase() + 'Skill'}
              name={skill}
              modifier={modifier}
              key={skill}
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
  onChange: PropTypes.func,
};

// TODO: Maybe in the future, instead of having to make everything lowercase,
//  it is set as lowercase in the constants file, and css styling will deal with it?
export const mapStateToProps = ({ ability }, { name }) => ({
  score: ability[name.toLowerCase()].score,
  modifier: ability[name.toLowerCase()].modifier,
});

export const mapDispatchToProps = {
  onChange: applyAbilityProxy,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ability);
