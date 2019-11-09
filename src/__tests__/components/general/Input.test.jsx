import { shallow } from 'enzyme';
import React from 'react';

import { Input } from '../../../components/general/Input.jsx';
import { upArrow } from '../../../constants/Keycodes';
import dispatchIfInt from '../../../functions/dispatchIfInt';
import validateEvent from '../../../functions/validateEvent';

jest.unmock('../../../components/general/Input.jsx');
jest.unmock('../../../constants/Keycodes');

describe('Input component', () => {
  describe('rendering', () => {
    it('renders Input', () => {
      const wrapper = shallow(<Input id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Input as text when number', () => {
      const wrapper = shallow(<Input id="test" type="number" />);
      expect(wrapper.getElement()).toMatchSnapshot();
      expect(wrapper.find('#test').prop('type')).toEqual('text');
    });
  });

  describe('behaviour', () => {
    it('increases value by 1 when up is pressed ', () => {
      validateEvent.mockReturnValue(true);
      dispatchIfInt.mockImplementation(() => () => {});
      const preventDefault = jest.fn();
      const event = {
        target: {
          value: '1',
        },
        keyCode: upArrow,
        preventDefault,
      };

      const wrapper = shallow(
        <Input id="test" type="number" onKeyDown={jest.fn()} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
      wrapper.find('#test').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalled();
    });

    it('decreases value by 1 when down is pressed ', () => {
      const wrapper = shallow(<Input id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });
});
