import calculateProficiencyBonus from '../../functions/calculateProficiencyBonus';
jest.unmock('../../functions/calculateProficiencyBonus');

describe('calculateProficiencyBonus', () => {
  it('returns proficiency bonus', () => {
    expect(calculateProficiencyBonus(1)).toEqual(2);
    expect(calculateProficiencyBonus(10)).toEqual(4);
  });
});
