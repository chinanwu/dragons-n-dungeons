import { handleActions } from 'redux-actions';

import {
  editArmourClass,
  editHitDice,
  editHitPoints,
  editInitiativeBonus,
  editInspiration,
  editProficiencyBonus,
  editPassivePerception,
  editSpeed,
  editTempHitPoints,
} from '../actions/CombatActions';

// TODO basically check all the default fields
export const defaultState = {
  inspiration: false,
  armourClass: 0, // TODO: Get from default dexterity
  passivePerception: 0, // TODO: Get from default wisdom
  speed: 10, // TODO: Check if default speed is 10
  hitPoints: 0,
  initiativeBonus: 0,
  proficiencyBonus: 0,
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
