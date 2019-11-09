import { applyCharacter } from '../../thunk/CharacterThunk.jsx';
import {
  editName,
  editLevel,
  editRace,
  editClass,
  editExperience,
  editAlignment,
  editBackground,
} from '../../actions/CharacterActions';

jest.unmock('../../thunk/CharacterThunk.jsx');
jest.unmock('../../functions/dispatchIfInt'); // TODO dont unmock in future

describe('CharacterThunk', () => {
  editName.mockReturnValue('editName');
  editLevel.mockReturnValue('editLevel');
  editRace.mockReturnValue('editRace');
  editClass.mockReturnValue('editClass');
  editExperience.mockReturnValue('editExperience');
  editAlignment.mockReturnValue('editAlignment');
  editBackground.mockReturnValue('editBackground');

  describe('applyCharacter', () => {
    it('dispatches editName', () => {
      const dispatch = jest.fn();
      applyCharacter('name', 'newname')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editName']]);
      expect(editName.mock.calls).toEqual([['newname']]);
    });

    it('dispatches editRace', () => {
      const dispatch = jest.fn();
      applyCharacter('race', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editRace']]);
      expect(editRace.mock.calls).toEqual([[1]]);
    });

    it('dispatches editLevel', () => {
      const dispatch = jest.fn();
      applyCharacter('level', 1)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editLevel']]);
      expect(editLevel.mock.calls).toEqual([[1]]);
    });

    it('dispatches editClass', () => {
      const dispatch = jest.fn();
      applyCharacter('class', 'cleric')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editClass']]);
      expect(editClass.mock.calls).toEqual([['cleric']]);
    });

    it('dispatches editExperience', () => {
      const dispatch = jest.fn();
      applyCharacter('experience', 100)(dispatch);
      expect(dispatch.mock.calls).toEqual([['editExperience']]);
      expect(editExperience.mock.calls).toEqual([[100]]);
    });

    it('does nothing if experience passed in is not a int', () => {
      const dispatch = jest.fn();
      applyCharacter('experience', 'a')(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
      expect(editLevel).not.toHaveBeenCalled();
    });

    it('dispatches editAlignment', () => {
      const dispatch = jest.fn();
      applyCharacter('alignment', 'chaotic neutral')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editAlignment']]);
      expect(editAlignment.mock.calls).toEqual([['chaotic neutral']]);
    });

    it('dispatches editBackground', () => {
      const dispatch = jest.fn();
      applyCharacter('background', 'noble')(dispatch);
      expect(dispatch.mock.calls).toEqual([['editBackground']]);
      expect(editBackground.mock.calls).toEqual([['noble']]);
    });

    it('does nothing if given weird key', () => {
      const dispatch = jest.fn();
      applyCharacter('i am a weird key!', 'value!')(dispatch);
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
