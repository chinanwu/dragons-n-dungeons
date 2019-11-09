import reducer, { defaultState } from '../../reducers/ThemeReducer';
import { editTheme } from '../../actions/ThemeActions';

jest.unmock('../../reducers/ThemeReducer');
jest.unmock('../../actions/ThemeActions');

describe('ThemeReducer', () => {
  it('returns default state when state is undefined', () => {
    const action = { type: 'TEST' };
    expect(reducer(undefined, action)).toEqual(defaultState);
  });

  it('returns same state for unknown actions', () => {
    const state = {};
    const action = { type: 'TEST' };
    expect(reducer({}, action)).toEqual(state);
  });

  describe('editTheme action', () => {
    it('updates theme', () => {
      const state = { theme: 'dark' };
      expect(reducer({}, editTheme('dark'))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { theme: 'dark' };
      expect(reducer(state, editTheme('dark'))).toEqual(state);
    });
  });
});
