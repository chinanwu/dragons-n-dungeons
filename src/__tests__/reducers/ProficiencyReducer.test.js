import reducer, { defaultState } from '../../reducers/ProficiencyReducer';
import {
  editBonus,
  editInitiativeBonus,
  editPassivePerception,
  editProficiency,
} from '../../actions/ProficiencyActions';

jest.unmock('../../reducers/ProficiencyReducer');
jest.unmock('../../actions/ProficiencyActions');

describe('ProficiencyReducer', () => {
  it('returns default state when state is undefined', () => {
    const action = { type: 'TEST' };
    expect(reducer(undefined, action)).toEqual(defaultState);
  });

  it('returns same state for unknown actions', () => {
    const state = {};
    const action = { type: 'TEST' };
    expect(reducer({}, action)).toEqual(state);
  });

  describe('editBonus action', () => {
    it('updates bonus', () => {
      const state = { bonus: 0 };
      expect(reducer({}, editBonus(0))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { bonus: 0 };
      expect(reducer(state, editBonus(0))).toEqual(state);
    });
  });

  describe('editInitiativeBonus action', () => {
    it('updates initiativeBonus', () => {
      const state = { initiativeBonus: 1 };
      expect(reducer({}, editInitiativeBonus(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { initiativeBonus: 1 };
      expect(reducer(state, editInitiativeBonus(1))).toEqual(state);
    });
  });

  describe('editPassivePerception action', () => {
    it('updates passivePerception', () => {
      const state = { passivePerception: 1 };
      expect(reducer({}, editPassivePerception(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { passivePerception: 1 };
      expect(reducer(state, editPassivePerception(1))).toEqual(state);
    });
  });

  describe('editProficiency action', () => {
    it('updates bonus and initiativeBonus', () => {
      const state = { bonus: 1, initiativeBonus: 2 };
      expect(
        reducer({}, editProficiency({ bonus: 1, initiativeBonus: 2 }))
      ).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { bonus: 1, initiativeBonus: 2 };
      expect(
        reducer(state, editProficiency({ bonus: 1, initiativeBonus: 2 }))
      ).toEqual(state);
    });
  });
});
