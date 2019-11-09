import getThemeClassName from '../../functions/getThemeClassName';
jest.unmock('../../functions/getThemeClassName');

describe('getThemeClassName', () => {
  it('returns class name with theme', () => {
    expect(getThemeClassName('name', 'dark')).toBe('name name--dark');
  });

  it('returns class name without theme if null', () => {
    expect(getThemeClassName('name')).toBe('name');
  });
});
