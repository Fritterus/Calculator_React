import { Command } from '@/utils/CommandPattern/index';

export class SubtractCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.subtract();
  }

  undo() {
    return this.receiver.add();
  }
}
