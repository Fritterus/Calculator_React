import { Command } from '@/utils/CommandPattern/index';

export class DivideCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    return this.receiver.divide();
  }

  undo() {
    return this.receiver.multiplay();
  }
}
