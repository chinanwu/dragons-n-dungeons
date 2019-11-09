import { shallow } from 'enzyme';
import React from 'react';

import { Logo, mapStateToProps } from '../../../components/general/Logo.jsx';

jest.unmock('../../../components/general/Logo.jsx');

describe('Logo component', () => {
  describe('rendering', () => {
    it('renders Logo', () => {
      const wrapper = shallow(<Logo />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('returned mapped properties', () => {
      const theme = 'light';
      const state = { theme };
      expect(mapStateToProps({ theme: state })).toEqual({ theme: theme });
    });
  });
});
