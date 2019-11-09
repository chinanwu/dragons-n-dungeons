import PropTypes from 'prop-types';
import React from 'react';

// This is basically a shell, I wanted this component to be used as an intuitive way to make tabs
const Tab = ({ name, children, disabled }) => {
  return <div />;
};

Tab.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
  disabled: PropTypes.bool,
};

Tab.defaultProps = {
  disabled: false,
};

export default Tab;
