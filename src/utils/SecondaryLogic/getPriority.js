export const getPriority = (operation) => {
  if (operation === '*'
          || operation === '/'
          || operation === '%'
  ) {
    return 2;
  }

  if (
    operation === '+'
          || operation === '-'
  ) {
    return 1;
  }

  return 0;
};
