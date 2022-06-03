import { Command } from '@/utils/CommandPattern/index';

export class DivideWithRemainderCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.divideWithRemainder();
  }

  undo() {
    return -1;
  }
}
