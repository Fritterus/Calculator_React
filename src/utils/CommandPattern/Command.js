export class Command {
  constructor() {
    if (this.constructor.name === 'Command') {
      throw new Error('Can\'t create instance');
    }
  }

  execute() {
    throw new Error('Method not describe');
  }

  undo() {
    throw new Error('Method not describe');
  }
}
