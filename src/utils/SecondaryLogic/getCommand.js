import {
  AddCommand, SubtractCommand, MultiplyCommand,
  DivideCommand, DivideWithRemainderCommand,
} from '@/utils/CommandPattern/index';

import { OPERATION_STACK } from '@/constants/index';

export const getCommand = (invoker, calculator) => {
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
