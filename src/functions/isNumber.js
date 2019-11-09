export default value => {
  const test = parseInt(value, 10);
  return !isNaN(test) ? test : null;
};
