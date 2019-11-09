import isNumber from './isNumber';

export default (value, actionFn) => dispatch => {
  const test = isNumber(value);
  test !== null ? dispatch(actionFn(test)) : null;
};
