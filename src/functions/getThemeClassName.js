export default (name, theme) => {
  return (
    name +
    (theme !== undefined && theme !== null ? ' ' + name + '--' + theme : '')
  );
};
