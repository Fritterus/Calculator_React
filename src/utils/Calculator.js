import {
  OPERATIONS, OPERATION_STACK, NUMBER_STACK,
} from '@/constants/index';

import {
  Calculator, Invoker, AddCommand, SubtractCommand,
  MultiplyCommand, DivideCommand, DivideWithRemainderCommand,
} from '@/utils/CommandPattern/index';

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

const calculatorInit = () => {
  const rightOperand = parseFloat(NUMBER_STACK.pop());
  const leftOperand = parseFloat(NUMBER_STACK.pop());
  const calculator = new Calculator(leftOperand, rightOperand);

  return calculator;
};

const getCommand = (invoker, calculator) => {
  switch (OPERATION_STACK.pop()) {
    case '*':
      invoker.setCommand(new MultiplyCommand(calculator));
      break;
    case '/':
      invoker.setCommand(new DivideCommand(calculator));
      break;
    case '%':
      invoker.setCommand(new DivideWithRemainderCommand(calculator));
      break;
    case '+':
      invoker.setCommand(new AddCommand(calculator));
      break;
    case '-':
      invoker.setCommand(new SubtractCommand(calculator));
      break;
    default:
      break;
  }
};

const calculate = () => {
  const invoker = new Invoker();

  getCommand(invoker, calculatorInit());

  const result = invoker.command.execute();

  NUMBER_STACK.push(result);
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
    return 'Error';
  }
};

const plusMinus = [
  '+', '-',
];

const getSplittedExpression = (expression) => {
  let counter = 0;
  const splitted = expression.split('').reduce((acc, curr) => {
    if (OPERATIONS.includes(curr)) {
      counter++;
      return [...acc, curr];
    }
    if (curr === '.') {
      if (!isNaN(acc[counter - 1])) {
        acc[counter - 1] += curr;
        return acc;
      }
    }
    if (!isNaN(curr)) {
      if (plusMinus.includes(acc[counter - 1])
          && (acc[counter - 2] === '(' || acc[counter - 2] === undefined)) {
        acc[counter - 1] += curr;
        return acc;
      }
      if (!isNaN(acc[counter - 1])
            || acc[counter - 1] === '.') {
        acc[counter - 1] += curr;
        return acc;
      }
      counter++;
      return [...acc, curr];
    }

    counter++;
    return [...acc, curr];
  }, []);

  return splitted;
};

export const getAnswer = (expression) => {
  try {
    if (isNumberCheck(expression)) {
      return expression;
    }

    const splitted = getSplittedExpression(expression);

    const result = baseAlgorithm(splitted);

    if (!isNumberCheck(result)) {
      throw new Error('Expression result is NaN');
    }
    if (Number.isInteger(result)) {
      return result.toString();
    }
    console.log(parseFloat(result));
    return parseFloat(result.toFixed(3)).toString();
  } catch (error) {
    console.log(error);
    return 'Error';
  }
};
