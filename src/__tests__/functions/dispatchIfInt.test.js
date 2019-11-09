import dispatchIfInt from '../../functions/dispatchIfInt';
import isNumber from '../../functions/isNumber';

jest.unmock('../../functions/dispatchIfInt');

describe('dispatchIfInt', () => {
  it('dispatches if int', () => {
    isNumber.mockReturnValue(1);
    const dispatch = jest.fn();
    const actionFn = jest.fn();
    dispatchIfInt('1', actionFn)(dispatch);
    expect(isNumber.mock.calls).toEqual([['1']]);
    expect(actionFn.mock.calls).toEqual([[1]]);
    expect(dispatch).toHaveBeenCalled();
  });

  it('does not dispatch if not int', () => {
    isNumber.mockReturnValue(null);
    const dispatch = jest.fn();
    const actionFn = jest.fn();
    dispatchIfInt('a', actionFn)(dispatch);
    expect(isNumber.mock.calls).toEqual([['a']]);
    expect(actionFn).not.toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
  });
});
