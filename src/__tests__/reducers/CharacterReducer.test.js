import reducer, { defaultState } from '../../reducers/CharacterReducer';
import {
  editName,
  editLevel,
  editClass,
  editExperience,
  editAlignment,
  editBackground,
  editRace,
} from '../../actions/CharacterActions';

jest.unmock('../../reducers/CharacterReducer');
jest.unmock('../../actions/CharacterActions');

describe('CharacterReducer', () => {
  it('returns default state when state is undefined', () => {
    const action = { type: 'TEST' };
    expect(reducer(undefined, action)).toEqual(defaultState);
  });

  it('returns same state for unknown actions', () => {
    const state = {};
    const action = { type: 'TEST' };
    expect(reducer({}, action)).toEqual(state);
  });

  describe('editName action', () => {
    it('updates name', () => {
      const state = { name: 'grog' };
      expect(reducer({}, editName('grog'))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { name: 'grog' };
      expect(reducer(state, editName('grog'))).toEqual(state);
    });
  });

  describe('editLevel action', () => {
    it('updates level', () => {
      const state = { level: 1 };
      expect(reducer({}, editLevel(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { level: 1 };
      expect(reducer(state, editLevel(1))).toEqual(state);
    });
  });

  describe('editRace action', () => {
    it('updates race', () => {
      const state = { race: 1 };
      expect(reducer({}, editRace(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { race: 1 };
      expect(reducer(state, editRace(1))).toEqual(state);
    });
  });

  describe('editClass action', () => {
    it('updates cClass', () => {
      const state = { cClass: 'bard' };
      expect(reducer({}, editClass('bard'))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { cClass: 'bard' };
      expect(reducer(state, editClass('bard'))).toEqual(state);
    });
  });

  describe('editExperience action', () => {
    it('updates experience', () => {
      const state = { experience: 1 };
      expect(reducer({}, editExperience(1))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { experience: 1 };
      expect(reducer(state, editExperience(1))).toEqual(state);
    });
  });

  describe('editAlignment action', () => {
    it('updates alignment', () => {
      const state = { alignment: 'chaotic neutral' };
      expect(reducer({}, editAlignment('chaotic neutral'))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { alignment: 'chaotic neutral' };
      expect(reducer(state, editAlignment('chaotic neutral'))).toEqual(state);
    });
  });

  describe('editBackground action', () => {
    it('updates background', () => {
      const state = { background: 'noble' };
      expect(reducer({}, editBackground('noble'))).toEqual(state);
    });

    it('returns same state if there are no changes', () => {
      const state = { background: 'noble' };
      expect(reducer(state, editBackground('noble'))).toEqual(state);
    });
  });
});
