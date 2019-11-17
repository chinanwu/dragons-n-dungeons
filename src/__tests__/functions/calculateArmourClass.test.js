import calculateArmourClass from '../../functions/calculateArmourClass';

jest.unmock('../../functions/calculateArmourClass');

describe('calculateArmourClass', () => {
  it('returns armour class', () => {
    expect(calculateArmourClass(0)).toEqual(13);
  });
});
