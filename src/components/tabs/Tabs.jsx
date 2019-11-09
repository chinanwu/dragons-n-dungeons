import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import getThemeClassName from '../../functions/getThemeClassName';
import TabList from './TabList.jsx';
import TabPanels from './TabPanels.jsx';

import './Tabs.less';

const TabTypes = {
  Tab: 'Tab',
  TabHeader: 'TabHeader',
  TabFooter: 'TabFooter',
};

const isTabType = (child, tabType) =>
  child.type &&
  child.type.name !== undefined &&
  child.type.name.toString() === tabType;

const parseTabs = tabs => {
  let tabList = [];
  let tabPanels = [];
  let tabHeader = null;
  let tabFooter = null;

  // This allows for users to have other things within Tabs as well
  let otherContents = [];

  // If there is only a single child, 'children' becomes just a single [Object object]
  if (!Array.isArray(tabs)) {
    if (isTabType(tabs, TabTypes.Tab)) {
      tabList.push({ name: tabs.props.name, disabled: tabs.props.disabled });
      tabPanels.push(tabs.props.children);
    }
    // Don't allow this for now - Maybe a future thing? Not sure
    // else if (isTabType(tabs, TabTypes.TabHeader)) {
    //   tabHeader = tabs;
    // } else if (isTabType(tabs, TabTypes.TabFooter)) {
    //   tabFooter = tabs; }
    else {
      otherContents.push(tabs);
    }
    return { tabList, tabPanels, tabHeader, tabFooter, otherContents };
  } else {
    tabs.map(tab => {
      if (isTabType(tab, TabTypes.Tab)) {
        tabList.push({ name: tab.props.name, disabled: tab.props.disabled });
        tabPanels.push(tab.props.children);
      } else if (isTabType(tab, TabTypes.TabHeader)) {
        tabHeader = tab;
      } else if (isTabType(tab, TabTypes.TabFooter)) {
        tabFooter = tab;
      } else {
        otherContents.push(tab);
      }
    });
    return { tabList, tabPanels, tabHeader, tabFooter, otherContents };
  }
};

const getFirstActive = list => {
  for (let i = 0; i < list.length; i++) {
    if (!list[i].disabled) {
      return i;
    }
  }
};

export const Tabs = ({ defaultActive, children, theme }) => {
  if (children === undefined || children.length === 0) {
    return null;
  }

  const { tabList, tabPanels, tabHeader, tabFooter, otherContents } = parseTabs(
    children
  );

  if (tabList.length === 0) {
    return <div>{otherContents}</div>;
  }

  const active = tabList[defaultActive].disabled
    ? getFirstActive(tabList)
    : defaultActive;

  const [activeIndex, setActiveIndex] = useState(active);

  const handleKeyDownTabList = useCallback(
    event => {
      if (
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey
      ) {
        const keyCode = event.keyCode;
        if (keyCode === 39 || keyCode === 40) {
          // right or down
          event.preventDefault();

          // This is done since React state doesn't immediately update
          setActiveIndex(activeIndex => {
            const tabListLength = tabList.length;
            let nextIndex =
              activeIndex + 1 === tabListLength ? 0 : activeIndex + 1;

            while (tabList[nextIndex].disabled) {
              nextIndex = nextIndex + 1 === tabListLength ? 0 : nextIndex + 1;
            }

            return nextIndex;
          });
        } else if (keyCode === 37 || keyCode === 38) {
          // left or up
          event.preventDefault();

          // This is done since React state doesn't immediately update
          setActiveIndex(activeIndex => {
            const tabListLength = tabList.length;
            let nextIndex =
              activeIndex - 1 === -1 ? tabListLength - 1 : activeIndex - 1;

            while (tabList[nextIndex].disabled) {
              nextIndex =
                nextIndex - 1 === -1 ? tabListLength - 1 : nextIndex - 1;
            }

            return nextIndex;
          });
        }
      }
    },
    [setActiveIndex]
  );

  const handleClickTabList = useCallback(
    event => {
      setActiveIndex(
        // Unfortunate
        parseInt(event.target.attributes.id.value.replace('tabButton__', ''))
      );
    },
    [setActiveIndex]
  );

  return (
    <div className={getThemeClassName('Tabs', theme)} role="tabs">
      <TabList
        id="tabList"
        list={tabList}
        activeIndex={activeIndex}
        onClick={handleClickTabList}
        onKeyDown={handleKeyDownTabList}
        header={tabHeader}
        footer={tabFooter}
      />
      <TabPanels id="tabPanels" panels={tabPanels} activeIndex={activeIndex} />
      {otherContents.length > 0 ? otherContents : ''}
    </div>
  );
};

Tabs.propTypes = {
  defaultActive: PropTypes.number,
  children: PropTypes.any,
  theme: PropTypes.string,
};

Tabs.defaultProps = {
  defaultActive: 0,
};

export const mapStateToProps = ({ theme }) => ({
  theme: theme.theme,
});

export default connect(mapStateToProps)(Tabs);
