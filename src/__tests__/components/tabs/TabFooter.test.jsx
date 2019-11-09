import { shallow } from 'enzyme';
import React from 'react';

import { TabFooter } from '../../../components/tabs/TabFooter.jsx';

jest.unmock('../../../components/tabs/TabFooter.jsx');

describe('TabFooter component', () => {
  describe('rendering', () => {
    it('renders TabFooter', () => {
      const wrapper = shallow(<TabFooter />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
