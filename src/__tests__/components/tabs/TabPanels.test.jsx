import { shallow } from 'enzyme';
import React from 'react';

import {
  mapStateToProps,
  TabPanels,
} from '../../../components/tabs/TabPanels.jsx';

jest.unmock('../../../components/tabs/TabPanels.jsx');

describe('TabPanels component', () => {
  describe('rendering', () => {
    it('renders TabPanels', () => {
      const wrapper = shallow(<TabPanels />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders TabPanels with empty panels', () => {
      const wrapper = shallow(<TabPanels panels={[]} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders TabPanels with panels', () => {
      const wrapper = shallow(
        <TabPanels
          panels={['Some things', 'Other content']}
          activeIndex={0}
          theme="light"
        />
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
