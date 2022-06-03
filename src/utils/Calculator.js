import { OPERATIONS, NUMBER_REGEX, OPERATION_STACK, NUMBER_STACK } from '@/constants/index'

Array.prototype.peek = function () {
    if (this.length === 0) {
        throw new Error('Error')
    }
    return this[this.length - 1]
}

Array.prototype.isEmpty = function () {
    if (this.length === 0) {
        return true
    }
    else {
        return false
    }
}

const operationFilter = operation => {

    if (OPERATION_STACK.isEmpty() ||
        operation === '(') {
        OPERATION_STACK.push(operation)
        return
    }

    if (operation === ')') {

        while (OPERATION_STACK.peek() !== '(') {
            calculate()
        }

        OPERATION_STACK.pop()

        return
    }

    if (getPriority(operation) > getPriority(OPERATION_STACK.peek())) {
        OPERATION_STACK.push(operation)
        return
    }

    if (getPriority(operation) <= getPriority(OPERATION_STACK.peek())) {
        calculate()
        OPERATION_STACK.push(operation)

    }
}

const calculate = () => {
    let leftOperand
    let rightOperand
    switch (OPERATION_STACK.pop()) {
        case '*':
            rightOperand = parseFloat(NUMBER_STACK.pop())
            leftOperand = parseFloat(NUMBER_STACK.pop())
            NUMBER_STACK.push(leftOperand * rightOperand)
            break
        case '/':
            rightOperand = parseFloat(NUMBER_STACK.pop())
            leftOperand = parseFloat(NUMBER_STACK.pop())
            NUMBER_STACK.push(leftOperand / rightOperand)
            break
        case '%':
            rightOperand = parseFloat(NUMBER_STACK.pop())
            leftOperand = parseFloat(NUMBER_STACK.pop())
            NUMBER_STACK.push(leftOperand % rightOperand)
            break
        case '+':
            rightOperand = parseFloat(NUMBER_STACK.pop())
            leftOperand = parseFloat(NUMBER_STACK.pop())
            NUMBER_STACK.push(leftOperand + rightOperand)
            break
        case '-':
            rightOperand = parseFloat(NUMBER_STACK.pop())
            leftOperand = parseFloat(NUMBER_STACK.pop())
            NUMBER_STACK.push(leftOperand - rightOperand)
            break
    }
}

const getPriority = operation => {

    if (operation === '*' ||
        operation === '/' ||
        operation === '%'
    ) {
        return 2
    }

    if (
        operation === '+' ||
        operation === '-'
    ) {
        return 1
    }

    else {
        return 0
    }

}


const baseAlgorithm = expression => {

    try {
        for (const item of expression) {

            if (isNumberCheck(parseFloat(item))) {
                NUMBER_STACK.push(item)
                continue
            }
            operationFilter(item)
        }

        while (!OPERATION_STACK.isEmpty()) {
            calculate()
        }

        return NUMBER_STACK.pop()
    }
    catch (err) {
        console.log(err)
    }


}

const getNumbers = value => {
    return [...value.matchAll(NUMBER_REGEX)].map(x => x[0])
}

const isNumberCheck = number => {
    return !isNaN(number);
}

export const getAnswer = expression => {
    try {
        if (isNumberCheck(expression)) {
            return expression;
        }
        const splitted = expression.replace(/[\+\-\*\/\%\(\)]/g, match => ` ${match} `)
            .split(' ')
            .filter(x => x !== ' ' && x !== '')
            .map(x => OPERATIONS.includes(x) ? x : +x)
        console.log(splitted)
    
        expression = expression.split(/(\d+)/).filter(x => x)
    
        const result = baseAlgorithm(splitted)

        if(!isNumberCheck(result)) {
            throw new Error('Expression result is NaN')
        }
        if(Number.isInteger(result)) {
            return result.toString()
        }
        else return result.toFixed(3).toString()

    }catch(error) {
        console.log(error)
        return 'Error'      
    }
}
