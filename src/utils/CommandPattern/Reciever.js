export class Calculator {
  constructor(firstOperand, secondOperand) {
    this.firstOperand = firstOperand; this.secondOperand = secondOperand;
  }

  add() {
    return this.firstOperand + this.secondOperand;
  }

  subtract() {
    return this.firstOperand - this.secondOperand;
  }

  multiply() {
    return this.firstOperand * this.secondOperand;
  }

  divide() {
    return this.firstOperand / this.secondOperand;
  }

  divideWithRemainder() {
    return this.firstOperand % this.secondOperand;
  }
}
