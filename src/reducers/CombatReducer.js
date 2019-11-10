import { handleActions } from 'redux-actions';

import {
  editArmourClass,
  editHitDice,
  editHitPoints,
  editInitiativeBonus,
  editInspiration,
  editPassivePerception,
  editProficiencyBonus,
  editSpeed,
  editTempHitPoints,
} from '../actions/CombatActions';
import { ABILITY_NAMES } from '../constants/Abilities';
import calculateArmourClass from '../functions/calculateArmourClass';
import calculateHitPoints from '../functions/calculateHitPoints';
import calculatePassivePerception from '../functions/calculatePassivePerception';
import calculateProficiencyBonus from '../functions/calculateProficiencyBonus';
import { defaultState as abilityDefaultState } from './AbilityReducer';
import { defaultState as characterDefaultState } from './CharacterReducer';

// TODO basically check all the default fields
export const defaultState = {
  inspiration: false,

  // 13 + dex mod // TODO add armour
  armourClass: calculateArmourClass(
    abilityDefaultState[ABILITY_NAMES['dex'].toLowerCase()].modifier
  ),

  // 10 + proficiency bonus + dex mod
  passivePerception: calculatePassivePerception(
    0,
    abilityDefaultState[ABILITY_NAMES['dex'].toLowerCase()].modifier
  ),

  // Depends on race + armour, 15 seems to be the lowest
  speed: 15,

  // const mod + hit dice
  hitPoints: calculateHitPoints(
    abilityDefaultState[ABILITY_NAMES['con'].toLowerCase()].modifier,
    '1d4'
  ),

  initiativeBonus: 0,
  proficiencyBonus: calculateProficiencyBonus(characterDefaultState['level']),
  hitDice: '1d4',
  tempHitPoints: 0,
};

export default handleActions(
  {
    [editInspiration]: (state, { payload }) => ({
      ...state,
      inspiration: payload,
    }),
    [editArmourClass]: (state, { payload }) => ({
      ...state,
      armourClass: payload,
    }),
    [editPassivePerception]: (state, { payload }) => ({
      ...state,
      passivePerception: payload,
    }),
    [editSpeed]: (state, { payload }) => ({
      ...state,
      speed: payload,
    }),
    [editHitPoints]: (state, { payload }) => ({
      ...state,
      hitPoints: payload,
    }),
    [editInitiativeBonus]: (state, { payload }) => ({
      ...state,
      initiativeBonus: payload,
    }),
    [editProficiencyBonus]: (state, { payload }) => ({
      ...state,
      proficiencyBonus: payload,
    }),
    [editHitDice]: (state, { payload }) => ({
      ...state,
      hitDice: payload,
    }),
    [editTempHitPoints]: (state, { payload }) => ({
      ...state,
      tempHitPoints: payload,
    }),
  },
  defaultState
);
