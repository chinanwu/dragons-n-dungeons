import { shallow } from 'enzyme';
import React from 'react';
import { mapStateToProps, Tabs } from '../../../components/tabs/Tabs.jsx';

jest.unmock('../../../components/tabs/Tabs.jsx');
jest.unmock('../../../functions/getThemeClassName');

describe('Tabs component', () => {
  describe('rendering', () => {
    it('renders Tabs', () => {
      const wrapper = shallow(<Tabs theme="light" />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Tabs with empty children', () => {
      const wrapper = shallow(<Tabs children={[]} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Tabs with non-tab child', () => {
      const wrapper = shallow(
        <Tabs>
          <p>Test</p>
        </Tabs>
      );
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Tabs with tab child', () => {
      const tab = {
        type: { name: 'Tab' },
        props: {
          name: 'Test-tab',
          disabled: false,
          children: [{ type: 'p', props: { children: 'Test 12' } }],
        },
      };
      const wrapper = shallow(<Tabs children={tab} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('renders Tabs with tab children', () => {
      const tabHeader = {
        type: { name: 'TabHeader' },
        props: {
          children: [{ type: 'p', props: { children: 'Logo' } }],
        },
      };
      const tabFooter = {
        type: { name: 'TabFooter' },
        props: {
          children: [{ type: 'p', props: { children: 'Footer' } }],
        },
      };

      const children = [
        tabHeader,
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [
              {
                type: 'div',
                props: {
                  children: [{ type: 'p', props: { children: 'Test 2' } }],
                },
              },
            ],
          },
        },
        tabFooter,
        {
          type: 'p',
          props: { children: 'Test 3' },
        },
      ];
      const wrapper = shallow(<Tabs children={children} />);
      expect(wrapper.getElement()).toMatchSnapshot();
    });
  });

  describe('behaviour', () => {
    it('switch to tab when tab list button is clicked', () => {
      const tab = {
        type: { name: 'Tab' },
        props: {
          name: 'Test-tab',
          disabled: false,
          children: [{ type: 'p', props: { children: 'Test 1' } }],
        },
      };
      const wrapper = shallow(<Tabs children={tab} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const event = {
        target: {
          attributes: {
            id: { value: 'tabButton__0' },
          },
        },
      };
      wrapper.find('#tabList').simulate('click', event);
    });

    it('when keydown with unsupported keys, do not prevent default', () => {
      const preventDefault = jest.fn();
      const shiftEvent = { shiftKey: true, preventDefault: preventDefault };
      const ctrlEvent = { ctrlKey: true, preventDefault: preventDefault };
      const altEvent = { altKey: true, preventDefault: preventDefault };
      const metaEvent = { metaKey: true, preventDefault: preventDefault };
      const slashEvent = { keyCode: 191, preventDefault: preventDefault };

      const tab = {
        type: { name: 'Tab' },
        props: {
          name: 'Test-tab',
          disabled: false,
          children: [{ type: 'p', props: { children: 'Test 1' } }],
        },
      };

      const wrapper = shallow(<Tabs children={tab} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      wrapper.find('#tabList').simulate('keydown', shiftEvent);
      wrapper.find('#tabList').simulate('keydown', ctrlEvent);
      wrapper.find('#tabList').simulate('keydown', altEvent);
      wrapper.find('#tabList').simulate('keydown', metaEvent);
      wrapper.find('#tabList').simulate('keydown', slashEvent);
      expect(preventDefault).not.toHaveBeenCalled();
    });

    it('when left is pressed, go to previous tab', () => {
      const tabs = [
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 2' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab3',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 3' } }],
          },
        },
      ];
      const wrapper = shallow(<Tabs defaultActive={0} children={tabs} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const preventDefault = jest.fn();
      const event = {
        keyCode: 37,
        preventDefault: preventDefault,
      };

      wrapper.find('#tabList').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('when left is pressed and previous tab is disabled, go to the first previous non-disabled tab', () => {
      const tabs = [
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 2' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab3',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 3' } }],
          },
        },
      ];

      const wrapper = shallow(<Tabs defaultActive={1} children={tabs} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const preventDefault = jest.fn();
      const event = {
        keyCode: 37,
        preventDefault: preventDefault,
      };

      wrapper.find('#tabList').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('when right or down arrow is pressed, go to the tab to the right', () => {
      const tabs = [
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 2' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab3',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 3' } }],
          },
        },
      ];
      const wrapper = shallow(<Tabs defaultActive={2} children={tabs} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const preventDefault = jest.fn();
      const event = {
        keyCode: 39,
        preventDefault: preventDefault,
      };
      wrapper.find('#tabList').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('when right is pressed, and next is disabled, go to the next non-disabled tab', () => {
      const tabs = [
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 2' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab3',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 3' } }],
          },
        },
      ];
      const wrapper = shallow(<Tabs defaultActive={1} children={tabs} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const preventDefault = jest.fn();
      const event = {
        keyCode: 39,
        preventDefault: preventDefault,
      };

      wrapper.find('#tabList').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('when home is pressed, go to first active tab', () => {
      const tabs = [
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 2' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab3',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 3' } }],
          },
        },
      ];
      const wrapper = shallow(<Tabs defaultActive={0} children={tabs} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const preventDefault = jest.fn();
      const event = {
        keyCode: 36,
        preventDefault: preventDefault,
      };

      wrapper.find('#tabList').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it('when end is pressed, go to last active tab', () => {
      const tabs = [
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 1' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab2',
            disabled: false,
            children: [{ type: 'p', props: { children: 'Test 2' } }],
          },
        },
        {
          type: { name: 'Tab' },
          props: {
            name: 'Test-tab3',
            disabled: true,
            children: [{ type: 'p', props: { children: 'Test 3' } }],
          },
        },
      ];
      const wrapper = shallow(<Tabs defaultActive={0} children={tabs} />);
      expect(wrapper.getElement()).toMatchSnapshot();

      const preventDefault = jest.fn();
      const event = {
        keyCode: 35,
        preventDefault: preventDefault,
      };

      wrapper.find('#tabList').simulate('keydown', event);
      expect(preventDefault).toHaveBeenCalledTimes(1);
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
