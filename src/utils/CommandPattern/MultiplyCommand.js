import { Command } from '@/utils/CommandPattern/index';

export class MultiplyCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.multiply();
  }

  undo() {
    return this.receiver.divide();
  }
}
