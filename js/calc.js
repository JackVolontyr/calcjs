'use strict';

let Methods = require('./methods');
let Panel = require('./panel');
let Output = require('./output');
let Input = require('./input');
let Logic = require('./logic');

import ajaxService from './ajaxService';
import _ from 'lodash';

// Template
// let template = JSON.parse(require("../templates/calcButtons.json"));
// let template = require("json!../json/calcButtons.json");

class Calc extends Logic {
  constructor(options) {
    super();
    this._el = options.el;

    this._panel = new Panel({
      el: document.querySelector(`.js-calc__top-panel`)
    });

    this._output = new Output({
      el: document.querySelector(`.js-calc__output`)
    });

    this._input = new Input({
      el: document.querySelector(`.js-calc__input`)
    });

    // Render from server file
    ajaxService.ajax({
      requestMethod: 'GET',
      url: '../calcjs/json/calcButtons.json', // for GitHub
      // url: '../json/calcButtons.json',
      success: this._renderCalcButtons.bind(this)
    })

    // Input
    this._input.getElement().addEventListener(
      'click', this._putInput.bind(this)
    );
    // Close Calc
    this._panel.getElement().addEventListener(
      'click', this._closeCalcCalc.bind(this)
    );
    // Move Calc
    this._panel.getElement().addEventListener(
      'mousedown', this._dndCalcCalc.bind(this)
    );
  }

  _renderCalcButtons(template) {
    let elem = document.getElementById('calcBtnTemplate').innerHTML
    this._input.getElement().innerHTML = _.template(elem)({
      option: template
    });
  }

  // Close Calc
  _closeCalcCalc(e) {
    if (e.target.closest(`.js-calc__top-button--close`)) {
      let customEvent = new CustomEvent('closeCalcCalc');
      this._el.dispatchEvent(customEvent);
    }
  }

  // Move Calc
  _dndCalcCalc(e) {
    let customEvent = new CustomEvent('dndCalcCalc', {
      detail: e
    });
    this._el.dispatchEvent(customEvent);
  }

}

module.exports = Calc;
