import {
  editCharisma,
  editConstitution,
  editDexterity,
  editIntelligence,
  editStrength,
  editWisdom,
} from '../actions/AbilityActions';
import { ABILITY_NAMES } from '../constants/Abilities';
import calculateAbilityModifier from '../functions/calculateAbilityModifier';

export const applyAbilityProxy = (name, score) => dispatch => {
  switch (name) {
    case ABILITY_NAMES['dex']:
      applyAbility(score, editDexterity, dispatch);
      break;
    case ABILITY_NAMES['str']:
      applyAbility(score, editStrength, dispatch);
      break;
    case ABILITY_NAMES['con']:
      applyAbility(score, editConstitution, dispatch);
      break;
    case ABILITY_NAMES['int']:
      applyAbility(score, editIntelligence, dispatch);
      break;
    case ABILITY_NAMES['wis']:
      applyAbility(score, editWisdom, dispatch);
      break;
    case ABILITY_NAMES['cha']:
      applyAbility(score, editCharisma, dispatch);
      break;
    default:
      break;
  }
};

const applyAbility = (score, editAbility, dispatch) => {
  dispatch(
    editAbility({
      score: score,
      modifier: calculateAbilityModifier(score),
    })
  );
};
