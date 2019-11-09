import { shallow } from 'enzyme';
import React from 'react';
import { TabList, mapStateToProps } from '../../../components/tabs/TabList.jsx';

jest.unmock('../../../components/tabs/TabList.jsx');
jest.unmock('../../../functions/getThemeClassName');

describe('TabList component', () => {
  describe('rendering', () => {
    it('renders TabList', () => {
      const wrapper = shallow(<TabList />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders TabList with empty list', () => {
      const wrapper = shallow(<TabList list={[]} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders TabList with list', () => {
      const wrapper = shallow(
        <TabList list={[{ name: 'test-tab', disabled: false }]} />
      );
      expect(wrapper.getElement()).toMatchSnapshot();
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
