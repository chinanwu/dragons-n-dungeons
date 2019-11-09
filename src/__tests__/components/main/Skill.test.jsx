import { shallow } from 'enzyme';
import React, { useState } from 'react';

import { Skill, mapStateToProps } from '../../../components/main/Skill.jsx';

jest.unmock('../../../components/main/Skill.jsx');

describe('Skill component', () => {
  describe('rendering', () => {
    it('renders Skill', () => {
      const wrapper = shallow(<Skill id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders proficiency Skill', () => {
      useState.mockReturnValue([true]);
      const wrapper = shallow(<Skill id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('when click, become proficient in Skill', () => {
      const setProficiency = jest.fn();
      useState.mockReturnValue([false, setProficiency]);
      const event = {
        target: {
          checked: true,
        },
      };

      const wrapper = shallow(<Skill id="test" />);
      wrapper.find('#testCheckbox').simulate('click', event);
      expect(wrapper.getElement()).toMatchSnapshot();
      expect(setProficiency.mock.calls).toEqual([[true]]);
    });

    it('when hit enter or space, become proficient in Skill', () => {
      const setProficiency = jest.fn();
      useState.mockReturnValue([false, setProficiency]);
      const enterEvent = {
        keyCode: 13,
      };
      const spaceEvent = {
        keyCode: 32,
      };

      const wrapper = shallow(<Skill id="test" />);
      wrapper.find('#testCheckbox').simulate('keypress', enterEvent);
      wrapper.find('#testCheckbox').simulate('keypress', spaceEvent);
      expect(wrapper.getElement()).toMatchSnapshot();
      expect(setProficiency.mock.calls).toEqual([[true], [true]]);
    });

    it('when hit unsupported keys, do nothing', () => {
      const setProficiency = jest.fn();
      useState.mockReturnValue([false, setProficiency]);
      const shiftEvent = {
        shiftKey: true,
      };
      const ctrlEvent = {
        ctrlKey: true,
      };
      const altEvent = {
        altKey: true,
      };
      const metakeyEvent = {
        metaKey: true,
      };
      const event = {
        keyCode: 12,
      };

      const wrapper = shallow(<Skill id="test" />);
      wrapper.find('#testCheckbox').simulate('keypress', shiftEvent);
      wrapper.find('#testCheckbox').simulate('keypress', ctrlEvent);
      wrapper.find('#testCheckbox').simulate('keypress', altEvent);
      wrapper.find('#testCheckbox').simulate('keypress', metakeyEvent);
      wrapper.find('#testCheckbox').simulate('keypress', event);
      expect(wrapper.getElement()).toMatchSnapshot();
      expect(setProficiency).not.toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('returned mapped properties', () => {
      const bonus = 1;
      const state = { bonus };
      expect(mapStateToProps({ proficiency: state })).toEqual({
        proficiencyBonus: bonus,
      });
    });
  });
});
