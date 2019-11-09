import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getThemeClassName from '../../functions/getThemeClassName';
import TabButton from './TabButton.jsx';

import './TabList.less';

export const TabList = ({
  list,
  activeIndex,
  header,
  footer,
  theme,
  onClick,
  onKeyDown,
}) => {
  let tabButtons = [];

  if (list !== undefined && list.length !== 0) {
    tabButtons = list.map(({ name, disabled }, index) => {
      return (
        <TabButton
          id={`tabButton__${index}`}
          label={name}
          index={index}
          isActive={index === activeIndex}
          isDisabled={disabled}
          onClick={onClick}
          onKeyDown={onKeyDown}
          key={`TabButton__${index}`}
        />
      );
    });
  }

  return (
    <div
      className={getThemeClassName('TabList', theme)}
      role="tablist"
      aria-label="Tabs"
    >
      <div className="TabList--left">
        {header}
        {tabButtons}
      </div>
      <div className="TabFooter">{footer}</div>
    </div>
  );
};

TabList.propTypes = {
  list: PropTypes.array,
  activeIndex: PropTypes.number,
  header: PropTypes.any,
  footer: PropTypes.any,
  theme: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export const mapStateToProps = ({ theme }) => ({
  theme: theme.theme,
});

export default connect(mapStateToProps)(TabList);
