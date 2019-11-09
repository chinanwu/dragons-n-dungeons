import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getThemeClassName from '../../functions/getThemeClassName';
import { applyTheme } from '../../thunk/ThemeThunk.jsx';

import './Dropdown.less';

export const Dropdown = ({ id, name, options, theme, onChange }) => {
  const handleChange = useCallback(
    event => {
      onChange(event.target.value.toString());
    },
    [onChange]
  );

  return (
    <div id={id} className={getThemeClassName('Dropdown', theme)}>
      <select
        id="dropdown__select"
        className={getThemeClassName('Dropdown__select', theme)}
        defaultValue={name}
        onChange={handleChange}
      >
        <option disabled value={name} hidden>
          {name}
        </option>
        {options.map((option, index) => (
          <option
            id={`dropdown__option-${index}`}
            className={getThemeClassName('Dropdown__option', theme)}
            value={option.toLowerCase()}
            key={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.array,
  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
};

export const mapStateToProps = ({ theme }) => ({
  theme: theme.theme,
});

export const mapDispatchToProps = {
  onChange: applyTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
