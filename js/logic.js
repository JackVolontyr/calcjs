'use strict';

let Methods = require('./methods');

class Logic extends Methods {
  constructor(options) {
    super();

    this._operators = [
      '+', '-', 'x', '÷' //, '√'
    ];
    this._decimalAdded = false;
    this._operatorAdded = false;
  }

  _putInput(e) {
    e.preventDefault();

    let buttonData = e.target.dataset;
    if (this._output.getElement().innerHTML === '0') {
      this._output.getElement().innerHTML = '';
    }

    if (buttonData.number) {
      this._operatorAdded = false;
      this._renderOutput(buttonData.number);

    } else if (buttonData.symbol) {
      this._addSymbol(buttonData.symbol);

    } else if (buttonData.option) {
      switch (buttonData.option) {
        case 'backspace':
          this._backspace();
          break;
        case 'reset':
          this._renderOutput('0', true);
          this._decimalAdded = false;
          break;
      }

    }
  }

  _renderOutput(value = '0', render = false) {
    if (render) {
      this._output.getElement().innerHTML = value;
      return;
    }
    this._output.getElement().innerHTML += value;
  }

  _addSymbol(symbol) {
    switch (symbol) {
      case '=':
        this._operatorAdded = false;
        return this._toTotal();

      case '.':
        if (!this._decimalAdded) {
          this._decimalAdded = true;
          this._operatorAdded = false;
          return this._renderOutput(symbol);
        }
        return;
    }

    if (this._operatorAdded) {
      this._backspace();
    }
    this._decimalAdded = false;
    this._operatorAdded = true;
    this._renderOutput(symbol);
  }

  _toTotal() {
    let equation = this._output.getElement().innerHTML;
    let lastChar = equation[equation.length - 1];

    equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

    if (this._operators.indexOf(lastChar) > -1 || lastChar == '.') {
      equation = equation.replace('dote', '');
    }

    if (equation) {
      this._renderOutput(eval(equation), true);
      this._decimalAdded = false;
    }
  }

  _backspace() {
    let outputNow = this._output.getElement().innerHTML;

    if (outputNow.length <= 1) {
      this._output.getElement().innerHTML = '0';
      return;
    }
    this._output.getElement().innerHTML = outputNow.slice(0, -1);
  }

};

module.exports = Logic;
