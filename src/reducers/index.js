import { combineReducers } from 'redux';
import theme from './ThemeReducer';
import ability from './AbilityReducer';
import proficiency from './ProficiencyReducer';
import character from './CharacterReducer';
import combat from './CombatReducer';

const rootReducer = combineReducers({
  theme,
  ability,
  proficiency,
  character,
  combat,
});

export default rootReducer;
