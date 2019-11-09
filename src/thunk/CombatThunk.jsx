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
import dispatchIfInt from '../functions/dispatchIfInt.js';

export const applyCombat = (key, value) => dispatch => {
  switch (key) {
    case 'inspiration':
      dispatch(editInspiration(value));
      break;
    case 'armourClass':
      dispatchIfInt(value, editArmourClass)(dispatch);
      break;
    case 'passivePerception':
      dispatchIfInt(value, editPassivePerception)(dispatch);
      break;
    case 'speed':
      dispatchIfInt(value, editSpeed)(dispatch);
      break;
    case 'hitPoints':
      dispatchIfInt(value, editHitPoints)(dispatch);
      break;
    case 'initiativeBonus':
      dispatchIfInt(value, editInitiativeBonus)(dispatch);
      break;
    case 'proficiencyBonus':
      dispatchIfInt(value, editProficiencyBonus)(dispatch);
      break;
    case 'hitDice':
      dispatch(editHitDice(value));
      break;
    case 'tempHitPoints':
      dispatchIfInt(value, editTempHitPoints)(dispatch);
      break;
    default:
      break;
  }
};
