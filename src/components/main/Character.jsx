import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { applyCharacter } from '../../thunk/CharacterThunk.jsx';
import { defaultState } from '../../reducers/CharacterReducer';
import LabelledInput from '../general/LabelledInput.jsx';

import './Character.less';

export const Character = ({
  name,
  level,
  race,
  cClass, //class is a forbidden word
  experience,
  alignment,
  background,
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

  return (
    <div className="Character">
      <div className="Character__name">
        <LabelledInput
          id="characterName"
          label="Name: "
          type="text"
          value={name}
          onChange={handleChange('name')}
        />
      </div>
      <div className="Character--bottom">
        <div className="Character--left">
          <LabelledInput
            id="characterLevel"
            label="Level: "
            type="text"
            value={level}
            onChange={handleChange('level')}
          />
          <LabelledInput
            id="characterRace"
            label="Race: "
            type="text"
            value={race}
            onChange={handleChange('race')}
          />
          <LabelledInput
            id="characterClass"
            label="Class: "
            type="text"
            value={cClass}
            onChange={handleChange('class')}
          />
        </div>
        <div className="Character--right">
          <LabelledInput
            id="characterExperience"
            label="Experience: "
            type="text"
            value={experience}
            onChange={handleChange('experience')}
          />
          <LabelledInput
            id="characterAlignment"
            label="Alignment: "
            type="text"
            value={alignment}
            onChange={handleChange('alignment')}
          />
          <LabelledInput
            id="characterBackground"
            label="Background: "
            type="text"
            value={background}
            onChange={handleChange('background')}
          />
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  race: PropTypes.string,
  cClass: PropTypes.string,
  experience: PropTypes.number,
  alignment: PropTypes.string,
  background: PropTypes.string,
};

export const mapStateToProps = ({
  character: { name, level, race, cClass, experience, alignment, background },
}) => ({
  name: name,
  level: level,
  race: race,
  cClass: cClass,
  experience: experience,
  alignment: alignment,
  background: background,
});

export const mapDispatchToProps = {
  onChange: applyCharacter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);
