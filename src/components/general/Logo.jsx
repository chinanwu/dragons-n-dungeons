import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import './Logo.less';

export const Logo = ({ theme }) => (
  <img
    className="Logo"
    src={require('../../images/dndlogo' + theme + 'V2.png')}
    alt={'logo'}
  />
);

Logo.propTypes = {
  theme: PropTypes.string,
};

export const mapStateToProps = ({ theme }) => ({
  theme: theme.theme,
});

export default connect(mapStateToProps)(Logo);
