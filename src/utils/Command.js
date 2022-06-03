class Calculator {

    constructor() {
    }

    setCommand(command) {
        this.command = command
    }
}

class Command {
    constructor() {
        if (this.constructor.name === 'Command') {
            throw new Error(`Can't create instance`)
        }
    }

    execute() {
        throw new Error('Method not described')
    }

    undo() {
        throw new Error('Method not described')
    }

}

class Add extends Command {
    constructor(value) {
        super()
        this.value = value
    }

    execute(currentValue) {
        return currentValue + this.value
    }

    undo(currentValue) {
        return currentValue - this.value
    }
}

class Substract extends Command {
    constructor(value) {
        super()
        this.value = value
    }

    execute(currentValue) {
        return currentValue - this.value
    }

    undo(currentValue) {
        return currentValue + this.value
    }
}

class Multiply extends Command {
    constructor(value) {
        super()
        this.value = value
    }

    execute(currentValue) {
        return currentValue * this.value
    }

    undo(currentValue) {
        return currentValue / this.value
    }
}

class Divide extends Command {
    constructor(value) {
        super()
        this.value = value
    }

    execute(currentValue) {
        return currentValue / this.value
    }

    undo(currentValue) {
        return currentValue * this.value
    }
}

class DivideWithRemainder extends Command {
    constructor(value) {
        super()
        this.value = value
    }

    execute(currentValue) {
        return currentValue % this.value
    }

    undo(currentValue) {
        return 0
    }
}