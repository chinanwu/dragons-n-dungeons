import { shallow } from 'enzyme';
import React from 'react';

import { TabHeader } from '../../../components/tabs/TabHeader.jsx';

jest.unmock('../../../components/tabs/TabHeader.jsx');

describe('TabHeader component', () => {
  describe('rendering', () => {
    it('renders TabHeader', () => {
      const wrapper = shallow(<TabHeader />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
