import { OPERATION_STACK, NUMBER_STACK } from '@/constants/index';

import {
  Calculator, Invoker,
} from '@/utils/CommandPattern/index';

import { getSplittedExpression, getPriority, getCommand } from './SecondaryLogic/index';

const calculatorInit = () => {
  const rightOperand = parseFloat(NUMBER_STACK.pop());
  const leftOperand = parseFloat(NUMBER_STACK.pop());
  const calculator = new Calculator(leftOperand, rightOperand);

  return calculator;
};

const calculate = () => {
  const invoker = new Invoker();

  getCommand(invoker, calculatorInit());

  const result = invoker.command.execute();

  NUMBER_STACK.push(result);
};

const operationFilter = (operation) => {
  if (OPERATION_STACK.length === 0
        || operation === '(') {
    OPERATION_STACK.push(operation);
    return;
  }

  if (operation === ')') {
    while (OPERATION_STACK[OPERATION_STACK.length - 1] !== '(') {
      calculate();
    }

    OPERATION_STACK.pop();

    return;
  }

  if (getPriority(operation) > getPriority(OPERATION_STACK[OPERATION_STACK.length - 1])) {
    OPERATION_STACK.push(operation);
    return;
  }

  if (getPriority(operation) <= getPriority(OPERATION_STACK[OPERATION_STACK.length - 1])) {
    calculate();
    OPERATION_STACK.push(operation);
  }
};

const baseAlgorithm = (expression) => {
  try {
    for (const item of expression) {
      if (!isNaN(parseFloat(item))) {
        NUMBER_STACK.push(item);
        continue;
      }
      operationFilter(item);
    }

    while (OPERATION_STACK.length !== 0) {
      calculate();
    }

    return NUMBER_STACK.pop();
  } catch (err) {
    return 'Error';
  }
};

export const getAnswer = (expression) => {
  try {
    if (!isNaN(expression)) return expression;

    const splitted = getSplittedExpression(expression);

    const result = baseAlgorithm(splitted);

    if (isNaN(result)) {
      throw new Error('Expression result is NaN');
    }
    if (Number.isInteger(result)) return result.toString();
    return parseFloat(result.toFixed(3)).toString();
  } catch (error) {
    return 'Error';
  }
};
