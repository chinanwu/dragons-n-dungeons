import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

import Checkbox from '../general/Checkbox.jsx';

import './Skill.less';

export const Skill = ({ skill, modifier, proficiencyBonus }) => {
  const [isProficient, setIsProficient] = useState(false);

  const handleChange = useCallback(
    checked => {
      setIsProficient(checked);
    },
    [setIsProficient]
  );

  const calculateModifier = () =>
    isProficient ? modifier + proficiencyBonus : modifier;

  return (
    <div className="Skill">
      <Checkbox checked={isProficient} onChange={handleChange} />
      <div className="Skill__modifier">{calculateModifier()}</div>
      <div className="Skill__name">{skill}</div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  modifier: PropTypes.number,
  proficiencyBonus: PropTypes.number,
};

export default Skill;
