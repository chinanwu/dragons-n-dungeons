import { shallow } from 'enzyme';
import React from 'react';

import { LabelledInput } from '../../../components/general/LabelledInput.jsx';

jest.unmock('../../../components/general/LabelledInput.jsx');

describe('LabelledInput component', () => {
  describe('rendering', () => {
    it('renders LabelledInput', () => {
      const wrapper = shallow(<LabelledInput id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
