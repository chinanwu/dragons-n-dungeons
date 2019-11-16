import React from 'react';

import { ABILITY_NAMES } from '../../constants/Abilities';

import Ability from './Ability.jsx';
import Character from './Character.jsx';
import Combat from './Combat.jsx';
import './Main.less';

export const Main = () => {
  return (
    <div className="Main">
      <div className="Main__abilities">
        <Ability
          id={ABILITY_NAMES['str'].toLowerCase()}
          name={ABILITY_NAMES['str']}
        />
        <Ability
          id={ABILITY_NAMES['con'].toLowerCase()}
          name={ABILITY_NAMES['con']}
        />
        <Ability
          id={ABILITY_NAMES['dex'].toLowerCase()}
          name={ABILITY_NAMES['dex']}
        />
      </div>
      <div className="Main__details">
        <Character />
        <Combat />
      </div>
      <div className="Main__abilities">
        <Ability
          id={ABILITY_NAMES['wis'].toLowerCase()}
          name={ABILITY_NAMES['wis']}
        />
        <Ability
          id={ABILITY_NAMES['int'].toLowerCase()}
          name={ABILITY_NAMES['int']}
        />
        <Ability
          id={ABILITY_NAMES['cha'].toLowerCase()}
          name={ABILITY_NAMES['cha']}
        />
      </div>
    </div>
  );
};

export default Main;
