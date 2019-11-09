import { shallow } from 'enzyme';
import React from 'react';

import { App } from '../../components/App.jsx';

jest.unmock('../../components/App.jsx');

describe('App component', () => {
  describe('rendering', () => {
    it('renders App', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
