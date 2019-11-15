export default (length, current, index) => {
  if (current === index) {
    return -1;
  } else if (current > index) {
    return length - (current - index + 1);
  } else {
    return index - current - 1;
  }
};

// current === index -> -1
// a  b  c  d
//       i  c
// current > index by 1 -> list.length - 2 -> list.length - 1 - 1
// a  b  c  d
//    i     c
// current > index by 2 -> list.length - 3
// a  b  c  d
// i        c
// current > index by 3 -> list.length - 4
// current > index by n -> list.length - (n + 1)

// a  b  c  d
// c  i
// current < index by 1 -> 0
// a  b  c  d
// c     i
// current < index by 2 -> 1
// a  b  c  d
// c        i
// current < index by 3 -> 2
// current < index by n -> n - 1
