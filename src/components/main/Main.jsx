import React from 'react';

import Ability from './Ability.jsx';
import Character from './Character.jsx';
import Combat from './Combat.jsx';
import { ABILITY_NAMES } from '../../constants/Abilities';

import './Main.less';

export const Main = () => {
  return (
    <div id="main">
      <div>
        <Ability
          id={ABILITY_NAMES['str'].toLowerCase()}
          name={ABILITY_NAMES['str']}
          className="Ability"
        />
        <Ability
          id={ABILITY_NAMES['con'].toLowerCase()}
          name={ABILITY_NAMES['con']}
          className="Ability"
        />
        <Ability
          id={ABILITY_NAMES['dex'].toLowerCase()}
          name={ABILITY_NAMES['dex']}
          className="Ability"
        />
      </div>
      <div>
        <Character />
        <Combat />
      </div>
      <div>
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
