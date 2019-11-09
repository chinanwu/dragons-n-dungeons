import calculateAbilityModifier from '../../functions/calculateAbilityModifier';
import { applyAbilityProxy } from '../../thunk/AbilityThunk.jsx';
import {
  editDexterity,
  editStrength,
  editConstitution,
  editWisdom,
  editIntelligence,
  editCharisma,
} from '../../actions/AbilityActions';

jest.unmock('../../thunk/AbilityThunk.jsx');
jest.unmock('../../constants/Abilities');

describe('AbilityThunk', () => {
  editDexterity.mockReturnValue('editDexterity');
  editStrength.mockReturnValue('editStrength');
  editConstitution.mockReturnValue('editConstitution');
  editWisdom.mockReturnValue('editWisdom');
  editIntelligence.mockReturnValue('editIntelligence');
  editCharisma.mockReturnValue('editCharisma');

  describe('applyAbilityProxy', () => {
    it('dispatches editDexterity', () => {
      calculateAbilityModifier.mockReturnValue(-5);
      const dispatch = jest.fn();
      applyAbilityProxy('Dexterity', 0)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editDexterity']]);
      expect(editDexterity.mock.calls).toEqual([[{ score: 0, modifier: -5 }]]);
    });

    it('dispatches editStrength', () => {
      calculateAbilityModifier.mockReturnValue(-5);
      const dispatch = jest.fn();
      applyAbilityProxy('Strength', 0)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editStrength']]);
      expect(editStrength.mock.calls).toEqual([[{ score: 0, modifier: -5 }]]);
    });

    it('dispatches editConstitution', () => {
      calculateAbilityModifier.mockReturnValue(-5);
      const dispatch = jest.fn();
      applyAbilityProxy('Constitution', 0)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editConstitution']]);
      expect(editConstitution.mock.calls).toEqual([
        [{ score: 0, modifier: -5 }],
      ]);
    });

    it('dispatches editWisdom', () => {
      calculateAbilityModifier.mockReturnValue(-5);
      const dispatch = jest.fn();
      applyAbilityProxy('Wisdom', 0)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editWisdom']]);
      expect(editWisdom.mock.calls).toEqual([[{ score: 0, modifier: -5 }]]);
    });

    it('dispatches editIntelligence', () => {
      calculateAbilityModifier.mockReturnValue(-5);
      const dispatch = jest.fn();
      applyAbilityProxy('Intelligence', 0)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editIntelligence']]);
      expect(editIntelligence.mock.calls).toEqual([
        [{ score: 0, modifier: -5 }],
      ]);
    });

    it('dispatches editCharisma', () => {
      calculateAbilityModifier.mockReturnValue(-5);
      const dispatch = jest.fn();
      applyAbilityProxy('Charisma', 0)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editCharisma']]);
      expect(editCharisma.mock.calls).toEqual([[{ score: 0, modifier: -5 }]]);
    });

    it('dispatches nothing if not an ability', () => {
      const dispatch = jest.fn();
      applyAbilityProxy('blah', 0)(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
