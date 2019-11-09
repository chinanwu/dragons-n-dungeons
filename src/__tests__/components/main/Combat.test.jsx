import { shallow } from 'enzyme';
import React from 'react';

import { Combat } from '../../../components/main/Combat.jsx';

jest.unmock('../../../components/main/Combat.jsx');

describe('Combat component', () => {
  describe('rendering', () => {
    it('renders Combat', () => {
      const wrapper = shallow(<Combat />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
