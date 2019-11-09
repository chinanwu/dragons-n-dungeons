import { shallow } from 'enzyme';
import React from 'react';

import { Main } from '../../../components/main/Main.jsx';

jest.unmock('../../../components/main/Main.jsx');

describe('Main component', () => {
  describe('rendering', () => {
    it('renders Main', () => {
      const wrapper = shallow(<Main />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
