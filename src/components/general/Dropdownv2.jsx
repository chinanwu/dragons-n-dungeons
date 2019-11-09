import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getThemeClassName from '../../functions/getThemeClassName.js';

import { applyTheme } from '../../thunk/ThemeThunk.jsx';

import './Dropdown.less';

export const Dropdown = ({ id, name, options, theme, onOptionClick }) => {
  const [focused, setFocused] = useState(-1);
  const [hide, setHide] = useState(true);

  const handleKeyDown = useCallback(event => {
    if (event.keyCode === 40) {
      event.preventDefault();
      setFocused(options.indexOf(event.target.nextSibling.textContent));
    }
  }, []);

  const handleClick = useCallback(() => {
    setHide(!hide);
  }, [hide, setHide]);

  const getOptions = useCallback(
    () => (
      <div className="Dropdown__options">
        {!hide
          ? options && options.length > 0
            ? options.map(opt => (
                <button key={opt} onClick={handleOptionClick}>
                  {opt}
                </button>
              ))
            : null
          : null}
      </div>
    ),
    [hide]
  );

  const handleOptionClick = useCallback(event => {
    onOptionClick(event.target.textContent.toLowerCase());
  }, []);

  const handleGlobalClick = useCallback(
    event => {
      event.stopPropagation();
      handleClick();
    },
    [hide, setHide]
  );

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', null);
    };
  }, []);

  return (
    <div
      id="dropdown"
      className={getThemeClassName('Dropdown', theme)}
      onKeyDown={handleKeyDown}
    >
      <button onClick={handleClick}>Theme</button>
      {getOptions()}
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
  onOptionClick: applyTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
