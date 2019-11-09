import { handleActions } from 'redux-actions';
import { editTheme } from '../actions/ThemeActions';

export const defaultState = {
  theme: 'light',
};

export default handleActions(
  {
    [editTheme]: (state, { payload }) => ({
      theme: payload,
    }),
  },
  defaultState
);
