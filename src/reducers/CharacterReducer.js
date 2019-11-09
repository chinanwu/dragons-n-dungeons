import { handleActions } from 'redux-actions';
import {
  editName,
  editLevel,
  editRace,
  editClass,
  editExperience,
  editAlignment,
  editBackground,
} from '../actions/CharacterActions';

export const defaultState = {
  name: '',
  level: 1,
  race: '',
  cClass: '',
  experience: 0,
  alignment: '',
  background: '',
};

export default handleActions(
  {
    [editName]: (state, { payload }) => ({
      ...state,
      name: payload,
    }),
    [editLevel]: (state, { payload }) => ({
      ...state,
      level: payload,
    }),
    [editRace]: (state, { payload }) => ({
      ...state,
      race: payload,
    }),
    [editClass]: (state, { payload }) => ({
      ...state,
      cClass: payload,
    }),
    [editExperience]: (state, { payload }) => ({
      ...state,
      experience: payload,
    }),
    [editAlignment]: (state, { payload }) => ({
      ...state,
      alignment: payload,
    }),
    [editBackground]: (state, { payload }) => ({
      ...state,
      background: payload,
    }),
  },
  defaultState
);
