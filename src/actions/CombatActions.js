import { createAction } from 'redux-actions';

export const editInspiration = createAction('inspiration/edit');
export const editArmourClass = createAction('armourClass/edit');
export const editSpeed = createAction('speed/edit');
export const editHitPoints = createAction('hitPoints/edit');
export const editInitiativeBonus = createAction('initiativeBonus/edit');
export const editPassivePerception = createAction('passivePerception/edit');
export const editProficiencyBonus = createAction('proficiencyBonus/edit');
export const editHitDice = createAction('hitDice/edit');
export const editTempHitPoints = createAction('tempHitPoints/edit');
