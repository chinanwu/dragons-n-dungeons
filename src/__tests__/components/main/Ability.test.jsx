import { shallow } from 'enzyme';
import React from 'react';

import { Ability, mapStateToProps } from '../../../components/main/Ability.jsx';

jest.unmock('../../../components/main/Ability.jsx');
jest.unmock('../../../constants/Abilities');

describe('Ability component', () => {
  describe('rendering', () => {
    it('renders Ability', () => {
      const wrapper = shallow(<Ability id="test" name="Strength" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('saves changed input', () => {
      const onChange = jest.fn();
      const event = {
        target: {
          value: '1',
        },
      };
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('change', event);
      expect(onChange.mock.calls).toEqual([['Strength', 1]]);
    });

    it('changes out of bounds input to max or min', () => {
      const onChange = jest.fn();
      const smallEvent = {
        target: {
          value: '-1',
        },
      };
      const largeEvent = {
        target: {
          value: '31',
        },
      };
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('change', smallEvent);
      wrapper.find('#abilityScore').simulate('change', largeEvent);
      expect(onChange.mock.calls).toEqual([['Strength', 0], ['Strength', 30]]);
    });

    it('changes null input to default score', () => {
      const onChange = jest.fn();
      const event = {
        target: {
          value: null,
        },
      };
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('change', event);
      expect(onChange.mock.calls).toEqual([['Strength', 0]]);
    });

    it('does nothing  if invalid input', () => {
      const onChange = jest.fn();
      const event = {
        target: {
          value: 'a',
        },
      };
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('change', event);
      expect(onChange).not.toHaveBeenCalled();
    });

    it('does nothing if event is null', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('change', null);
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    it('returned mapped properties', () => {
      const state = { test: { score: 1, modifier: 2 } };
      expect(mapStateToProps({ ability: state }, { name: 'Test' })).toEqual({
        score: 1,
        modifier: 2,
      });
    });
  });
});
