import getOrder from '../../functions/getOrder';

jest.unmock('../../functions/getOrder');

describe('getOrder', () => {
  it('returns order', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    expect(getOrder(list.length, 0, 0)).toEqual(-1);
    expect(getOrder(list.length, 0, 1)).toEqual(0);
    expect(getOrder(list.length, 0, 2)).toEqual(1);
    expect(getOrder(list.length, 0, 3)).toEqual(2);
    expect(getOrder(list.length, 0, 4)).toEqual(3);
    expect(getOrder(list.length, 1, 0)).toEqual(3);
    expect(getOrder(list.length, 1, 1)).toEqual(-1);
    expect(getOrder(list.length, 1, 2)).toEqual(0);
    expect(getOrder(list.length, 1, 3)).toEqual(1);
    expect(getOrder(list.length, 1, 4)).toEqual(2);
    expect(getOrder(list.length, 2, 0)).toEqual(2);
    expect(getOrder(list.length, 2, 1)).toEqual(3);
    expect(getOrder(list.length, 2, 2)).toEqual(-1);
    expect(getOrder(list.length, 2, 3)).toEqual(0);
    expect(getOrder(list.length, 2, 4)).toEqual(1);
    expect(getOrder(list.length, 3, 0)).toEqual(1);
    expect(getOrder(list.length, 3, 1)).toEqual(2);
    expect(getOrder(list.length, 3, 2)).toEqual(3);
    expect(getOrder(list.length, 3, 3)).toEqual(-1);
    expect(getOrder(list.length, 3, 4)).toEqual(0);
    expect(getOrder(list.length, 4, 0)).toEqual(0);
    expect(getOrder(list.length, 4, 1)).toEqual(1);
    expect(getOrder(list.length, 4, 2)).toEqual(2);
    expect(getOrder(list.length, 4, 3)).toEqual(3);
    expect(getOrder(list.length, 4, 4)).toEqual(-1);
  });
});
