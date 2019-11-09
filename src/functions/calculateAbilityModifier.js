export default score => {
  return Math.min(Math.floor((score - 10) / 2), 10);
};
