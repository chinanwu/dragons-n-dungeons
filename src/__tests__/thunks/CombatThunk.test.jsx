import { applyCombat } from '../../thunk/CombatThunk.jsx';
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
} from '../../actions/CombatActions';

jest.unmock('../../thunk/CombatThunk.jsx');
jest.unmock('../../functions/dispatchIfInt'); // TODO dont unmock in future

describe('CombatThunk', () => {
  editArmourClass.mockReturnValue('editArmourClass');
  editHitDice.mockReturnValue('editHitDice');
  editHitPoints.mockReturnValue('editHitPoints');
  editInitiativeBonus.mockReturnValue('editInitiativeBonus');
  editInspiration.mockReturnValue('editInspiration');
  editProficiencyBonus.mockReturnValue('editProficiencyBonus');
  editPassivePerception.mockReturnValue('editPassivePerception');
  editSpeed.mockReturnValue('editSpeed');
  editTempHitPoints.mockReturnValue('editTempHitPoints');

  describe('applyCombat', () => {
    it('dispatches editInspiration', () => {
      const dispatch = jest.fn();
      applyCombat('inspiration', true)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editInspiration']]);
      expect(editInspiration.mock.calls).toEqual([[true]]);
    });

    it('dispatches editArmourClass', () => {
      const dispatch = jest.fn();
      applyCombat('armourClass', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editArmourClass']]);
      expect(editArmourClass.mock.calls).toEqual([[1]]);
    });

    it('dispatches editPassivePerception', () => {
      const dispatch = jest.fn();
      applyCombat('passivePerception', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editPassivePerception']]);
      expect(editPassivePerception.mock.calls).toEqual([[1]]);
    });

    it('dispatches editSpeed', () => {
      const dispatch = jest.fn();
      applyCombat('speed', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editSpeed']]);
      expect(editSpeed.mock.calls).toEqual([[1]]);
    });

    it('dispatches editHitPoints', () => {
      const dispatch = jest.fn();
      applyCombat('hitPoints', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editHitPoints']]);
      expect(editHitPoints.mock.calls).toEqual([[1]]);
    });

    it('dispatches editInitiativeBonus', () => {
      const dispatch = jest.fn();
      applyCombat('initiativeBonus', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editInitiativeBonus']]);
      expect(editInitiativeBonus.mock.calls).toEqual([[1]]);
    });

    it('dispatches editProficiencyBonus', () => {
      const dispatch = jest.fn();
      applyCombat('proficiencyBonus', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editProficiencyBonus']]);
      expect(editProficiencyBonus.mock.calls).toEqual([[1]]);
    });

    it('dispatches editHitDice', () => {
      const dispatch = jest.fn();
      applyCombat('hitDice', '1d4')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editHitDice']]);
      expect(editHitDice.mock.calls).toEqual([['1d4']]);
    });

    it('dispatches editTempHitPoints', () => {
      const dispatch = jest.fn();
      applyCombat('tempHitPoints', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editTempHitPoints']]);
      expect(editTempHitPoints.mock.calls).toEqual([[1]]);
    });

    it('dispatches nothing if not valid', () => {
      const dispatch = jest.fn();
      applyCombat('test', 0)(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
