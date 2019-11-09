import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Skill = ({ id, name, modifier, proficiencyBonus }) => {
  const [isProficient, setProficiency] = useState(false);

  const handleClick = useCallback(
    event => {
      setProficiency(event.target.checked);
    },
    [setProficiency]
  );

  const handleKeyPress = useCallback(
    event => {
      if (
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        const keyCode = event.keyCode;
        if (keyCode === 13 || keyCode === 32) {
          //enter or space
          setProficiency(!isProficient);
        }
      }
    },
    [setProficiency, isProficient]
  );

  const calculateModifier = () =>
    isProficient ? proficiencyBonus + modifier : modifier;

  return (
    <div id={id}>
      <input
        id={id + 'Checkbox'}
        type="checkbox"
        role="checkbox"
        aria-checked={isProficient}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
      />
      {calculateModifier()}
      {name}
    </div>
  );
};

Skill.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  modifier: PropTypes.number,
  proficiencyBonus: PropTypes.number,
};

export const mapStateToProps = ({ proficiency }) => ({
  proficiencyBonus: proficiency.bonus,
});

export default connect(mapStateToProps)(Skill);
