import {
  editName,
  editLevel,
  editRace,
  editClass,
  editExperience,
  editAlignment,
  editBackground,
} from '../actions/CharacterActions';
import { editProficiencyBonus } from '../actions/CombatActions';
import calculateProficiencyBonus from '../functions/calculateProficiencyBonus';
import dispatchIfInt from '../functions/dispatchIfInt';

export const applyCharacter = (key, value) => dispatch => {
  switch (key) {
    case 'name':
      dispatch(editName(value));
      break;
    case 'race':
      dispatch(editRace(value));
      break;
    case 'level':
      dispatchIfInt(value, test => test)(dispatchMultiple(dispatch));
      break;
    case 'class':
      dispatch(editClass(value));
      break;
    case 'experience':
      dispatchIfInt(value, editExperience)(dispatch);
      break;
    case 'alignment':
      dispatch(editAlignment(value));
      break;
    case 'background':
      dispatch(editBackground(value));
      break;
    default:
      break;
  }
};

const dispatchMultiple = dispatch => value => {
  dispatch(editLevel(value));
  dispatch(editProficiencyBonus(calculateProficiencyBonus(value)));
};
