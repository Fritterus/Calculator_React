import {
  OPERATIONS, PLUS_MINUS, OPERATIONS_NO_BRACKETS,
} from '@/constants/index';

export const getSplittedExpression = (expression) => {
  let counter = 0;

  const splitted = expression.replace(/[+\-*/%()]/g, (match) => ` ${match} `)
    .split(' ')
    .filter((x) => x !== ' ' && x !== '')
    .map((x) => (OPERATIONS.includes(x) ? x : +x))
    .reduce((acc, curr) => {
      if (!isNaN(curr)) {
        if (PLUS_MINUS.includes(acc[counter - 1])
              && (acc[counter - 2] === '('
              || OPERATIONS_NO_BRACKETS.includes(acc[counter - 2])
              || acc[counter - 2] === undefined)) {
          acc[counter - 1] += curr;
          return acc;
        }
        if (acc[counter - 1] === ')') {
          throw new Error('');
        }
        counter++;
        return [...acc, curr];
      }
      if (curr === '(' && !isNaN(acc[counter - 1])) {
        counter += 2;
        return [...acc, '*', curr];
      }
      counter++;
      return [...acc, curr];
    }, []);

  return splitted;
};
