import { applyTheme } from '../../thunk/ThemeThunk.jsx';
import { editTheme } from '../../actions/ThemeActions';

jest.unmock('../../thunk/ThemeThunk.jsx');

describe('ThemeThunk', () => {
  editTheme.mockReturnValue('editTheme');

  describe('applyTheme', () => {
    it('dispatches editTheme if given valid theme', () => {
      const dispatch = jest.fn();
      applyTheme('light')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editTheme']]);
      expect(editTheme.mock.calls).toEqual([['light']]);
    });

    it('does not dispatch editTheme if given invalid theme', () => {
      const dispatch = jest.fn();
      applyTheme('starwars')(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
      expect(editTheme).not.toHaveBeenCalled();
    });
  });
});
