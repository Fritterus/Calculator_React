import {
  OPERATIONS, OPERATION_STACK, NUMBER_STACK,
} from '@/constants/index';

Array.prototype.peek = function peek() {
  if (this.length === 0) {
    throw new Error('Error');
  }
  return this[this.length - 1];
};

Array.prototype.isEmpty = function isEmpty() {
  if (this.length === 0) {
    return true;
  }

  return false;
};

const isNumberCheck = (number) => !isNaN(number);

const getPriority = (operation) => {
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

const calculate = () => {
  let leftOperand;
  let rightOperand;
  switch (OPERATION_STACK.pop()) {
    case '*':
      rightOperand = parseFloat(NUMBER_STACK.pop());
      leftOperand = parseFloat(NUMBER_STACK.pop());
      NUMBER_STACK.push(leftOperand * rightOperand);
      break;
    case '/':
      rightOperand = parseFloat(NUMBER_STACK.pop());
      leftOperand = parseFloat(NUMBER_STACK.pop());
      NUMBER_STACK.push(leftOperand / rightOperand);
      break;
    case '%':
      rightOperand = parseFloat(NUMBER_STACK.pop());
      leftOperand = parseFloat(NUMBER_STACK.pop());
      NUMBER_STACK.push(leftOperand % rightOperand);
      break;
    case '+':
      rightOperand = parseFloat(NUMBER_STACK.pop());
      leftOperand = parseFloat(NUMBER_STACK.pop());
      NUMBER_STACK.push(leftOperand + rightOperand);
      break;
    case '-':
      rightOperand = parseFloat(NUMBER_STACK.pop());
      leftOperand = parseFloat(NUMBER_STACK.pop());
      NUMBER_STACK.push(leftOperand - rightOperand);
      break;
    default:
      break;
  }
};

const operationFilter = (operation) => {
  if (OPERATION_STACK.isEmpty()
        || operation === '(') {
    OPERATION_STACK.push(operation);
    return;
  }

  if (operation === ')') {
    while (OPERATION_STACK.peek() !== '(') {
      calculate();
    }

    OPERATION_STACK.pop();

    return;
  }

  if (getPriority(operation) > getPriority(OPERATION_STACK.peek())) {
    OPERATION_STACK.push(operation);
    return;
  }

  if (getPriority(operation) <= getPriority(OPERATION_STACK.peek())) {
    calculate();
    OPERATION_STACK.push(operation);
  }
};

const baseAlgorithm = (expression) => {
  try {
    for (const item of expression) {
      if (isNumberCheck(parseFloat(item))) {
        NUMBER_STACK.push(item);
        continue;
      }
      operationFilter(item);
    }

    while (!OPERATION_STACK.isEmpty()) {
      calculate();
    }

    return NUMBER_STACK.pop();
  } catch (err) {
    console.log(err);
    return -1;
  }
};

export const getAnswer = (expression) => {
  try {
    if (isNumberCheck(expression)) {
      return expression;
    }
    const splitted = expression.replace(/[+\-*/%()]/g, (match) => ` ${match} `)
      .split(' ')
      .filter((x) => x !== ' ' && x !== '')
      .map((x) => (OPERATIONS.includes(x) ? x : +x));
    console.log(splitted);

    expression = expression.split(/(\d+)/).filter((x) => x);

    const result = baseAlgorithm(splitted);

    if (!isNumberCheck(result)) {
      throw new Error('Expression result is NaN');
    }
    if (Number.isInteger(result)) {
      return result.toString();
    }
    return result.toFixed(3).toString();
  } catch (error) {
    console.log(error);
    return 'Error';
  }
};
