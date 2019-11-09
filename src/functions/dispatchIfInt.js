export default (value, actionFn) => dispatch => {
  const test = parseInt(value, 10);
  !isNaN(test) ? dispatch(actionFn(test)) : null;
};
