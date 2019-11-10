import calculateHitPoints from '../../functions/calculateHitPoints';

jest.unmock('../../functions/calculateHitPoints');

describe('calculateHitPoints', () => {
  it('returns hit points', () => {
    const calculated = calculateHitPoints(1, '1d12');
    expect(calculated >= 1 && calculated <= 13).toBe(true);
  });

  it('returns zero when hit dice is invalid and modifier is negative', () => {
    expect(calculateHitPoints(-1, 'blah')).toEqual(0);
  });
});
