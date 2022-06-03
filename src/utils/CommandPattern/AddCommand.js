import { Command } from '@/utils/CommandPattern/index';

export class AddCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.add();
  }

  undo() {
    return this.receiver.subtract();
  }
}
