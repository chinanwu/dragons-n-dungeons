import {
  editBonus,
  editInitiativeBonus,
  editPassivePerception,
} from '../actions/ProficiencyActions';

export const applyBonus = bonus => dispatch => {
  dispatch(editBonus(bonus));
};

export const applyInitiativeBonus = initiativeBonus => dispatch => {
  dispatch(editInitiativeBonus(initiativeBonus));
};

export const applyPassivePerception = score => dispatch => {
  dispatch(editPassivePerception(score));
};

export const applyProficiency = ({ bonus, initiativeBonus }) => dispatch => {
  dispatch(editBonus(bonus));

  dispatch(editInitiativeBonus(initiativeBonus));
};
