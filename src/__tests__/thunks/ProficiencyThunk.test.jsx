import {
  applyBonus,
  applyInitiativeBonus,
  applyPassivePerception,
  applyProficiency,
} from '../../thunk/ProficiencyThunk.jsx';
import {
  editBonus,
  editInitiativeBonus,
  editPassivePerception,
} from '../../actions/ProficiencyActions';

jest.unmock('../../thunk/ProficiencyThunk.jsx');

describe('ProficiencyThunk', () => {
  editBonus.mockReturnValue('editBonus');
  editInitiativeBonus.mockReturnValue('editInitiativeBonus');
  editPassivePerception.mockReturnValue('editPassivePerception');

  describe('applyBonus', () => {
    it('dispatches editBonus', () => {
      const dispatch = jest.fn();
      applyBonus(1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editBonus']]);
      expect(editBonus.mock.calls).toEqual([[1]]);
    });
  });

  describe('applyInitiativeBonus', () => {
    it('dispatches editInitiativeBonus', () => {
      const dispatch = jest.fn();
      applyInitiativeBonus(1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editInitiativeBonus']]);
      expect(editInitiativeBonus.mock.calls).toEqual([[1]]);
    });
  });

  describe('applyPassivePerception', () => {
    it('dispatches editPassivePerception', () => {
      const dispatch = jest.fn();
      applyPassivePerception(1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editPassivePerception']]);
      expect(editPassivePerception.mock.calls).toEqual([[1]]);
    });
  });

  describe('applyProficiency', () => {
    it('dispatches editBonus and editInitiativeBonus', () => {
      const dispatch = jest.fn();
      applyProficiency({ bonus: 1, initiativeBonus: 2 })(dispatch);
      expect(dispatch.mock.calls).toEqual([
        ['editBonus'],
        ['editInitiativeBonus'],
      ]);
      expect(editBonus.mock.calls).toEqual([[1]]);
      expect(editInitiativeBonus.mock.calls).toEqual([[2]]);
    });
  });
});
