import { shallow } from 'enzyme';
import React from 'react';

import { Ability, mapStateToProps } from '../../../components/main/Ability';
import isNumber from '../../../functions/isNumber';
import validateEvent from '../../../functions/validateEvent';

jest.unmock('../../../components/main/Ability');
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
      validateEvent.mockReturnValue(true);
      isNumber.mockReturnValue(1);
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
      validateEvent.mockReturnValue(true);
      isNumber.mockReturnValueOnce(-1).mockReturnValueOnce(31);
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
      validateEvent.mockReturnValue(true);
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
      validateEvent.mockReturnValue(true);
      isNumber.mockReturnValue(null);
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
      validateEvent.mockReturnValue(false);
      const onChange = jest.fn();
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('change');
      expect(onChange).not.toHaveBeenCalled();
    });

    it('changes value when up arrow is pressed', () => {
      const onChange = jest.fn();
      const event = 1;
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('keydown', event);
      expect(onChange.mock.calls).toEqual([['Strength', 1]]);
    });

    it('changes value to be within boundaries when up arrow is pressed', () => {
      const onChange = jest.fn();
      const smallEvent = -1;
      const bigEvent = 31;
      const wrapper = shallow(
        <Ability id="test" name="Strength" onChange={onChange} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#abilityScore').simulate('keydown', smallEvent);
      wrapper.find('#abilityScore').simulate('keydown', bigEvent);
      expect(onChange.mock.calls).toEqual([['Strength', 0], ['Strength', 30]]);
    });
  });

  describe('mapStateToProps', () => {
    it('returned mapped properties', () => {
      const abilityState = { test: { score: 1, modifier: 2 } };
      const combatState = { proficiencyBonus: 3 };
      expect(
        mapStateToProps(
          { ability: abilityState, combat: combatState },
          { name: 'Test' }
        )
      ).toEqual({
        score: 1,
        modifier: 2,
        proficiencyBonus: 3,
      });
    });
  });
});
