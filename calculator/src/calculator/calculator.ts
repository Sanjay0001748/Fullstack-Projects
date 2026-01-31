import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  display: string = '0';
  firstValue: number = 0;
  operator: string = '';
  shouldResetDisplay: boolean = false;

  onNumberClick(num: string) {
    if (this.display === '0' || this.shouldResetDisplay) {
      this.display = num;
      this.shouldResetDisplay = false;
    } else {
      this.display += num;
    }
  }

  onOperator(op: string) {
    const currentValue = parseFloat(this.display);

    if (this.operator && !this.shouldResetDisplay) {
      this.firstValue = this.calculate();
    } else {
      this.firstValue = currentValue;
    }

    this.operator = op;
    this.shouldResetDisplay = true;
  }

  calculate(): number {
    const currentValue = parseFloat(this.display);
    let result = this.firstValue;

    switch (this.operator) {
      case '+':
        result = this.firstValue + currentValue;
        break;
      case '-':
        result = this.firstValue - currentValue;
        break;
      case '*':
        result = this.firstValue * currentValue;
        break;
      case '/':
        result = this.firstValue / currentValue;
        break;
    }

    return result;
  }

  onEqual() {
    if (this.operator) {
      const result = this.calculate();
      this.display = result.toString();
      this.operator = '';
      this.shouldResetDisplay = true;
    }
  }

  onDecimal() {
    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  clear() {
    this.display = '0';
    this.firstValue = 0;
    this.operator = '';
    this.shouldResetDisplay = false;
  }
}
