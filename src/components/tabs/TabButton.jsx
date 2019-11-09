import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import './TabButton.less';

const getClassNames = (isActive, isDisabled, theme) => {
  let classNames = 'TabButton';
  classNames += isDisabled
    ? ' TabButton--disabled'
    : isActive
    ? ' TabButton--active'
    : '';

  classNames += theme ? ` TabButton--${theme}` : '';
  return classNames;
};

export const TabButton = ({
  id,
  label,
  index,
  theme,
  isActive,
  isDisabled,
  onClick,
  onKeyDown,
}) => {
  const ref = useRef(null);

  // This is needed for arrow key nav
  useEffect(() => {
    if (isActive) {
      ref.current.focus();
    }
  }, [isActive]);

  // TODO implement button controls for div since its no longer a a tag
  return (
    <div
      className={getClassNames(isActive, isDisabled, theme)}
      id={id}
      role="tab"
      ref={ref}
      tabIndex={isActive ? 0 : -1}
      aria-controls={`tabPanel__${index}`}
      aria-selected={isActive}
      onClick={isDisabled ? event => event.preventDefault() : onClick}
      onKeyDown={onKeyDown}
    >
      {label}
    </div>
  );
};

TabButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  index: PropTypes.number,
  theme: PropTypes.string,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
};

TabButton.defaultProps = {
  isActive: false,
  isDisabled: false,
};

export const mapStateToProps = ({ theme }) => ({
  theme: theme.theme,
});

export default connect(mapStateToProps)(TabButton);
