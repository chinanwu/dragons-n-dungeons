import { editTheme } from '../actions/ThemeActions';

const isValid = theme => {
  switch (theme) {
    case 'light':
    case 'dark':
    case 'halloween':
      return true;
    default:
      return false;
  }
};

export const applyTheme = theme => dispatch => {
  if (isValid(theme)) {
    dispatch(editTheme(theme));
  }
};
