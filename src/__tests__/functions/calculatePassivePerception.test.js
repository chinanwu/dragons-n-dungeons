import calculatePassivePerception from '../../functions/calculatePassivePerception';

jest.unmock('../../functions/calculatePassivePerception');

describe('calculatePassivePerception', () => {
  it('returns passive perception', () => {
    expect(calculatePassivePerception(0, -5)).toEqual(5);
  });
});
