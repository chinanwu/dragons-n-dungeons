import { shallow } from 'enzyme';
import React, { useState } from 'react';

import { Checkbox } from '../../../components/general/Checkbox.jsx';

jest.unmock('../../../components/general/Checkbox.jsx');

describe('Checkbox component', () => {
  describe('rendering', () => {
    it('renders Checkbox', () => {
      const wrapper = shallow(<Checkbox />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Checkbox with props', () => {
      const wrapper = shallow(<Checkbox name="test" checked={true} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('becomes checked when clicked', () => {
      const setIsChecked = jest.fn();
      useState.mockReturnValueOnce([false, setIsChecked]);
      const event = {
        target: {
          checked: true,
        },
      };
      const wrapper = shallow(<Checkbox />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#checkbox').simulate('change', event);
      expect(setIsChecked.mock.calls).toEqual([[true]]);
    });
  });
});
