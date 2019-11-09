import dispatchIfInt from '../../functions/dispatchIfInt';
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
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('armourClass', 1)(jest.fn());
    });

    it('dispatches editPassivePerception', () => {
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('passivePerception', 1)(jest.fn());
    });

    it('dispatches editSpeed', () => {
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('speed', 1)(jest.fn());
    });

    it('dispatches editHitPoints', () => {
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('hitPoints', 1)(jest.fn());
    });

    it('dispatches editInitiativeBonus', () => {
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('initiativeBonus', 1)(jest.fn());
    });

    it('dispatches editProficiencyBonus', () => {
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('proficiencyBonus', 1)(jest.fn());
    });

    it('dispatches editHitDice', () => {
      const dispatch = jest.fn();
      applyCombat('hitDice', '1d4')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editHitDice']]);
      expect(editHitDice.mock.calls).toEqual([['1d4']]);
    });

    it('dispatches editTempHitPoints', () => {
      dispatchIfInt.mockImplementation(() => () => {});
      applyCombat('tempHitPoints', 1)(jest.fn());
    });

    it('dispatches nothing if not valid', () => {
      const dispatch = jest.fn();
      applyCombat('test', 0)(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
