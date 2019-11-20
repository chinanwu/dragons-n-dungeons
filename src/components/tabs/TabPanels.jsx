import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import getThemeClassName from '../../functions/getThemeClassName';

import './TabPanels.less';

const getClassNames = (isActive, theme) => {
  let classNames = 'TabPanel';
  classNames += isActive ? '' : ' TabPanel--hidden';

  return getThemeClassName(classNames, theme);
};

export const TabPanels = ({ panels, activeIndex, theme }) => {
  let tabPanels = [];

  if (panels !== undefined && panels.length !== 0) {
    tabPanels = panels.map((panel, index) => {
      return (
        <div
          id={`tabPanel__${index}`}
          className={getClassNames(index === activeIndex, theme)}
          role="tabpanel"
          aria-expanded={index === activeIndex}
          aria-labelledby={`tabButton__${index}`}
          key={`TabPanel__${index}`}
        >
          {panel}
        </div>
      );
    });
  }

  return <div className="TabPanels">{tabPanels}</div>;
};

TabPanels.propTypes = {
  panels: PropTypes.array,
  activeIndex: PropTypes.number,
  theme: PropTypes.string,
};

export const mapStateToProps = ({ theme }) => ({
  theme: theme.theme,
});

export default connect(mapStateToProps)(TabPanels);
