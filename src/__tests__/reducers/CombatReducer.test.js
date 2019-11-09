import reducer, { defaultState } from '../../reducers/CombatReducer';
import {
  editInspiration,
  editArmourClass,
  editPassivePerception,
  editSpeed,
  editHitPoints,
  editInitiativeBonus,
  editProficiencyBonus,
  editHitDice,
  editTempHitPoints,
} from '../../actions/CombatActions';

jest.unmock('../../reducers/CombatReducer');
jest.unmock('../../actions/CombatActions');

describe('CombatReducer', () => {
  it('returns default state when state is undefined', () => {
    const action = { type: 'TEST' };
    expect(reducer(undefined, action)).toEqual(defaultState);
  });

  it('returns same state for unknown actions', () => {
    const state = {};
    const action = { type: 'TEST' };
    expect(reducer({}, action)).toEqual(state);
  });

  describe('editInspiration action', () => {
    it('updates inspiration', () => {
      const state = { inspiration: true };
      expect(reducer({}, editInspiration(true))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { inspiration: true };
      expect(reducer(state, editInspiration(true))).toEqual(state);
    });
  });

  describe('editArmourClass action', () => {
    it('updates armour class', () => {
      const state = { armourClass: 1 };
      expect(reducer({}, editArmourClass(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { armourClass: 1 };
      expect(reducer(state, editArmourClass(1))).toEqual(state);
    });
  });

  describe('editPassivePerception action', () => {
    it('updates passive perception', () => {
      const state = { passivePerception: 1 };
      expect(reducer({}, editPassivePerception(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { passivePerception: 1 };
      expect(reducer(state, editPassivePerception(1))).toEqual(state);
    });
  });

  describe('editSpeed action', () => {
    it('updates speed', () => {
      const state = { speed: 1 };
      expect(reducer({}, editSpeed(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { speed: 1 };
      expect(reducer(state, editSpeed(1))).toEqual(state);
    });
  });

  describe('editHitPoints action', () => {
    it('updates hit points', () => {
      const state = { hitPoints: 1 };
      expect(reducer({}, editHitPoints(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { hitPoints: 1 };
      expect(reducer(state, editHitPoints(1))).toEqual(state);
    });
  });

  describe('editInitiativeBonus action', () => {
    it('updates initiative bonus', () => {
      const state = { initiativeBonus: 1 };
      expect(reducer({}, editInitiativeBonus(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { initiativeBonus: 1 };
      expect(reducer(state, editInitiativeBonus(1))).toEqual(state);
    });
  });

  describe('editProficiencyBonus action', () => {
    it('updates proficiency bonus', () => {
      const state = { proficiencyBonus: 1 };
      expect(reducer({}, editProficiencyBonus(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { proficiencyBonus: 1 };
      expect(reducer(state, editProficiencyBonus(1))).toEqual(state);
    });
  });

  describe('editHitDice action', () => {
    it('updates hit dice', () => {
      const state = { hitDice: 1 };
      expect(reducer({}, editHitDice(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { hitDice: 1 };
      expect(reducer(state, editHitDice(1))).toEqual(state);
    });
  });

  describe('editTempHitPoints action', () => {
    it('updates temp hit points', () => {
      const state = { tempHitPoints: 1 };
      expect(reducer({}, editTempHitPoints(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { tempHitPoints: 1 };
      expect(reducer(state, editTempHitPoints(1))).toEqual(state);
    });
  });
});
