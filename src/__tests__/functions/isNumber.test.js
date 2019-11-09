import isNumber from '../../functions/isNumber';

jest.unmock('../../functions/isNumber');

describe('isNumber', () => {
  it('returns number', () => {
    expect(isNumber('1')).toEqual(1);
  });

  it('returns null', () => {
    expect(isNumber('a')).toEqual(null);
  });
});
