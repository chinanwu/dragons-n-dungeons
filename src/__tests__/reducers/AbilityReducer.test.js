import reducer, { defaultState } from '../../reducers/AbilityReducer';
import {
  editDexterity,
  editStrength,
  editConstitution,
  editWisdom,
  editIntelligence,
  editCharisma,
} from '../../actions/AbilityActions';

jest.unmock('../../reducers/AbilityReducer');
jest.unmock('../../actions/AbilityActions');

describe('AbilityReducer', () => {
  it('returns default state when state is undefined', () => {
    const action = { type: 'TEST' };
    expect(reducer(undefined, action)).toEqual(defaultState);
  });

  it('returns same state for unknown actions', () => {
    const state = {};
    const action = { type: 'TEST' };
    expect(reducer({}, action)).toEqual(state);
  });

  describe('editDexterity action', () => {
    it('updates dexterity', () => {
      const initialState = { dexterity: { score: 0, modifier: -5 } };
      expect(reducer({}, editDexterity({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { dexterity: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { dexterity: { score: 0, modifier: -5 } },
          editDexterity({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { dexterity: { score: 0, modifier: -5 } };
      expect(reducer(state, editDexterity({ score: 0, modifier: -5 }))).toEqual(
        state
      );
    });
  });

  describe('editDexterity action', () => {
    it('updates dexterity', () => {
      const initialState = { dexterity: { score: 0, modifier: -5 } };
      expect(reducer({}, editDexterity({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { dexterity: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { dexterity: { score: 0, modifier: -5 } },
          editDexterity({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { dexterity: { score: 0, modifier: -5 } };
      expect(reducer(state, editDexterity({ score: 0, modifier: -5 }))).toEqual(
        state
      );
    });
  });

  describe('editStrength action', () => {
    it('updates strength', () => {
      const initialState = { strength: { score: 0, modifier: -5 } };
      expect(reducer({}, editStrength({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { strength: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { strength: { score: 0, modifier: -5 } },
          editStrength({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { strength: { score: 0, modifier: -5 } };
      expect(reducer(state, editStrength({ score: 0, modifier: -5 }))).toEqual(
        state
      );
    });
  });

  describe('editConstitution action', () => {
    it('updates constitution', () => {
      const initialState = { constitution: { score: 0, modifier: -5 } };
      expect(reducer({}, editConstitution({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { constitution: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { constitution: { score: 0, modifier: -5 } },
          editConstitution({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { constitution: { score: 0, modifier: -5 } };
      expect(
        reducer(state, editConstitution({ score: 0, modifier: -5 }))
      ).toEqual(state);
    });
  });

  describe('editWisdom action', () => {
    it('updates wisdom', () => {
      const initialState = { wisdom: { score: 0, modifier: -5 } };
      expect(reducer({}, editWisdom({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { wisdom: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { wisdom: { score: 0, modifier: -5 } },
          editWisdom({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { wisdom: { score: 0, modifier: -5 } };
      expect(reducer(state, editWisdom({ score: 0, modifier: -5 }))).toEqual(
        state
      );
    });
  });

  describe('editIntelligence action', () => {
    it('updates intelligence', () => {
      const initialState = { intelligence: { score: 0, modifier: -5 } };
      expect(reducer({}, editIntelligence({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { intelligence: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { intelligence: { score: 0, modifier: -5 } },
          editIntelligence({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { intelligence: { score: 0, modifier: -5 } };
      expect(
        reducer(state, editIntelligence({ score: 0, modifier: -5 }))
      ).toEqual(state);
    });
  });

  describe('editCharisma action', () => {
    it('updates charisma', () => {
      const initialState = { charisma: { score: 0, modifier: -5 } };
      expect(reducer({}, editCharisma({ score: 0, modifier: -5 }))).toEqual(
        initialState
      );

      const changedState = { charisma: { score: 1, modifier: -5 } };
      expect(
        reducer(
          { charisma: { score: 0, modifier: -5 } },
          editCharisma({ score: 1, modifier: -5 })
        )
      ).toEqual(changedState);
    });

    it('returns same state if there are no changes', () => {
      const state = { charisma: { score: 0, modifier: -5 } };
      expect(reducer(state, editCharisma({ score: 0, modifier: -5 }))).toEqual(
        state
      );
    });
  });
});
