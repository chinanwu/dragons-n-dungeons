import { shallow } from 'enzyme';
import React, { useState } from 'react';

import { Skill } from '../../../components/main/Skill.jsx';

jest.unmock('../../../components/main/Skill.jsx');

describe('Skill component', () => {
  describe('rendering', () => {
    it('renders Skill', () => {
      const wrapper = shallow(<Skill skill={'test'} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('adds proficiency bonus when proficient', () => {
      useState.mockReturnValue([true]);
      const wrapper = shallow(<Skill skill={'test'} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('sets proficiency when checked', () => {
      const setIsProficient = jest.fn();
      useState.mockReturnValue([false, setIsProficient]);
      const event = true;
      const wrapper = shallow(<Skill skill={'test'} />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#testCheckbox').simulate('change', event);
      expect(setIsProficient.mock.calls).toEqual([[true]]);
    });
  });
});
