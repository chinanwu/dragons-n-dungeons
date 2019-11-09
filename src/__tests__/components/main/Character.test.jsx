import { shallow } from 'enzyme';
import React from 'react';

import {
  Character,
  mapStateToProps,
} from '../../../components/main/Character.jsx';
import validateEvent from '../../../functions/validateEvent';
import { defaultState } from '../../../reducers/CharacterReducer';

jest.unmock('../../../components/main/Character.jsx');
jest.unmock('../../../reducers/CharacterReducer');

describe('Character component', () => {
  describe('rendering', () => {
    it('renders Character', () => {
      const wrapper = shallow(<Character />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('changes detail', () => {
      validateEvent.mockReturnValue(true);
      const onChange = jest.fn();
      const event = {
        target: {
          value: 'test2',
        },
      };
      const wrapper = shallow(<Character name="test" onChange={onChange} />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#characterName').simulate('change', event);
      expect(onChange.mock.calls).toEqual([['name', 'test2']]);
    });

    it('changes detail for number input', () => {
      const onChange = jest.fn();
      const event = 1;
      const wrapper = shallow(<Character name="test" onChange={onChange} />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#characterLevel').simulate('keydown', event);
      expect(onChange.mock.calls).toEqual([['level', 1]]);
    });

    it('sets default state if target is null', () => {
      validateEvent.mockReturnValue(true);
      const onChange = jest.fn();
      const event = {
        target: {
          value: null,
        },
      };
      const wrapper = shallow(<Character name="test" onChange={onChange} />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#characterName').simulate('change', event);
      expect(onChange.mock.calls).toEqual([['name', defaultState['name']]]);
    });

    it('does nothing with invalid event', () => {
      validateEvent.mockReturnValue(false);
      const onChange = jest.fn();
      const wrapper = shallow(<Character name="test" onChange={onChange} />);
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#characterName').simulate('change');
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('returned mapped properties', () => {
      const state = {
        name: 'name',
        level: 'level',
        race: 'race',
        cClass: 'cClass',
        experience: 'experience',
        alignment: 'alignment',
        background: 'background',
      };
      expect(mapStateToProps({ character: state })).toEqual(state);
    });
  });
});
