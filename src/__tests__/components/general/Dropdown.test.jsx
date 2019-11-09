import { shallow } from 'enzyme';
import React from 'react';

import {
  Dropdown,
  mapStateToProps,
} from '../../../components/general/Dropdown.jsx';

jest.unmock('../../../components/general/Dropdown.jsx');
jest.unmock('../../../functions/getThemeClassName');

describe('Dropdown component', () => {
  describe('rendering', () => {
    it('renders Dropdown', () => {
      const wrapper = shallow(<Dropdown id="test" options={[]} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Dropdown when passed options and theme', () => {
      const wrapper = shallow(
        <Dropdown
          id="test"
          theme="dark"
          options={['light', 'dark', 'halloween']}
        />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('toggles theme when dropdown option is chosen', () => {
      const onChange = jest.fn();
      const event = { target: { value: 'one' } };

      const wrapper = shallow(
        <Dropdown
          id="test"
          theme="light"
          options={['ZERO', 'ONE']}
          onChange={onChange}
        />
      );
      expect(wrapper.getElement()).toMatchSnapshot();

      wrapper.find('#dropdown__select').simulate('change', event);
      expect(onChange.mock.calls).toEqual([['one']]);
    });
  });

  describe('mapStateToProps', () => {
    it('returned mapped properties', () => {
      const theme = 'light';
      const state = { theme };
      expect(mapStateToProps({ theme: state })).toEqual({ theme: theme });
    });
  });
});
