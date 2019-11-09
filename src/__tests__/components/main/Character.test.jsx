import { shallow } from 'enzyme';
import React from 'react';

import {
  Character,
  mapStateToProps,
} from '../../../components/main/Character.jsx';

jest.unmock('../../../components/main/Character.jsx');

describe('Character component', () => {
  describe('rendering', () => {
    it('renders Character', () => {
      const wrapper = shallow(<Character />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('changes detail', () => {
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
