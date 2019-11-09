import validateEvent from '../../functions/validateEvent';

jest.unmock('../../functions/validateEvent');

describe('validateEvent', () => {
  it('returns true when valid', () => {
    const event = {
      target: { value: '' },
    };
    expect(validateEvent(event, true)).toEqual(true);
  });

  it('returns false when invalid', () => {
    const event = null;
    expect(validateEvent(event, true)).toEqual(false);
  });
});
