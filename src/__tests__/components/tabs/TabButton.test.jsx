import { shallow } from 'enzyme';
import React, { useEffect, useRef } from 'react';

import {
  TabButton,
  mapStateToProps,
} from '../../../components/tabs/TabButton.jsx';

jest.unmock('../../../components/tabs/TabButton.jsx');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
  useRef: jest.fn(current => ({ current })),
}));

describe('TabButton component', () => {
  describe('rendering', () => {
    it('renders TabButton', () => {
      const wrapper = shallow(<TabButton id="test" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders disabled TabButton', () => {
      const wrapper = shallow(<TabButton id="test" isDisabled={true} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders active TabButton', () => {
      const wrapper = shallow(<TabButton id="test" isActive={true} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders themed TabButton', () => {
      const wrapper = shallow(
        <TabButton id="test" isActive={true} theme="dark" />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('disables click', () => {
      const preventDefault = jest.fn();
      const onClick = jest.fn();
      const wrapper = shallow(
        <TabButton id="test" isDisabled={true} onClick={onClick} />
      );
      wrapper.find('#test').simulate('click', { preventDefault });
      expect(preventDefault).toHaveBeenCalled();
      expect(onClick).not.toHaveBeenCalled();
    });

    it('sets focus when is active', () => {
      const focus = jest.fn();
      useRef.mockReturnValue({ current: { focus } });
      shallow(<TabButton id="test" isActive={true} />);
      useEffect.mock.calls[0][0]();
      expect(focus).toHaveBeenCalled();
    });

    it('does not set focus when inactive', () => {
      const focus = jest.fn();
      useRef.mockReturnValue({ current: { focus } });
      shallow(<TabButton id="test" isActive={false} />);
      useEffect.mock.calls[0][0]();
      expect(focus).not.toHaveBeenCalled();
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
