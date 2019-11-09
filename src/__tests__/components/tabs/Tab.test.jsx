import { shallow } from 'enzyme';
import React from 'react';
import Tab from '../../../components/tabs/Tab.jsx';

jest.unmock('../../../components/tabs/Tab.jsx');

describe('Tab component', () => {
  describe('rendering', () => {
    it('renders Tab', () => {
      const wrapper = shallow(<Tab />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
