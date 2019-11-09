import { handleActions } from 'redux-actions';

import {
  editCharisma,
  editConstitution,
  editDexterity,
  editIntelligence,
  editStrength,
  editWisdom,
} from '../actions/AbilityActions';
import calculateAbilityModifier from '../functions/calculateAbilityModifier';

export const defaultScore = 0;
const defaultModifier = calculateAbilityModifier(defaultScore);

export const defaultState = {
  strength: { score: defaultScore, modifier: defaultModifier },
  constitution: { score: defaultScore, modifier: defaultModifier },
  dexterity: { score: defaultScore, modifier: defaultModifier },
  wisdom: { score: defaultScore, modifier: defaultModifier },
  intelligence: { score: defaultScore, modifier: defaultModifier },
  charisma: { score: defaultScore, modifier: defaultModifier },
};

export default handleActions(
  {
    [editStrength]: (state, { payload }) => ({
      ...state,
      strength: { score: payload.score, modifier: payload.modifier },
    }),
    [editDexterity]: (state, { payload }) => ({
      ...state,
      dexterity: { score: payload.score, modifier: payload.modifier },
    }),
    [editConstitution]: (state, { payload }) => ({
      ...state,
      constitution: { score: payload.score, modifier: payload.modifier },
    }),
    [editWisdom]: (state, { payload }) => ({
      ...state,
      wisdom: { score: payload.score, modifier: payload.modifier },
    }),
    [editIntelligence]: (state, { payload }) => ({
      ...state,
      intelligence: { score: payload.score, modifier: payload.modifier },
    }),
    [editCharisma]: (state, { payload }) => ({
      ...state,
      charisma: { score: payload.score, modifier: payload.modifier },
    }),
  },
  defaultState
);
