import { handleActions } from 'redux-actions';
import {
  editBonus,
  editInitiativeBonus,
  editPassivePerception,
  editProficiency,
} from '../actions/ProficiencyActions';

export const defaultState = {
  bonus: 0,
  initiativeBonus: 0,
  passivePerception: 5,
};

export default handleActions(
  {
    [editBonus]: (state, { payload }) => ({
      ...state,
      bonus: payload,
    }),
    [editInitiativeBonus]: (state, { payload }) => ({
      ...state,
      initiativeBonus: payload,
    }),
    [editPassivePerception]: (state, { payload }) => ({
      ...state,
      passivePerception: payload,
    }),
    [editProficiency]: (state, { payload }) => ({
      bonus: payload.bonus,
      initiativeBonus: payload.initiativeBonus,
    }),
  },
  defaultState
);
