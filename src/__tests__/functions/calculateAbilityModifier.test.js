import calculateAbilityModifier from '../../functions/calculateAbilityModifier';
jest.unmock('../../functions/calculateAbilityModifier');

describe('calculateAbilityModifier', () => {
  it('returns modifier', () => {
    expect(calculateAbilityModifier(0)).toEqual(-5);
    expect(calculateAbilityModifier(10)).toEqual(0);
    expect(calculateAbilityModifier(20)).toEqual(5);
    expect(calculateAbilityModifier(30)).toEqual(10);
  });
});
