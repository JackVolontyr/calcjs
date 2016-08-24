'use strict';

class Desk extends Methods {
  constructor(options) {
    super();
    this._el = options.el;

    this._calc = new Calc({
      el: document.querySelector(`${appName}__calc`)
    });

    this._icon = new Icon({
      el: document.querySelector(`${appName}__icon`)
    });

    // Open Calc
    this._icon.getElement().addEventListener(
      'openCalcIcon', this._openCalc.bind(this)
    );
    // DnD Icon
    this._icon.getElement().addEventListener(
      'dndIconIcon', this._dndIcon.bind(this)
    );
    // DnD Calc
    this._calc.getElement().addEventListener(
      'dndCalcCalc', this._dndCalc.bind(this)
    );
    // Close Calc
    this._calc.getElement().addEventListener(
      'closeCalcCalc', this._closeCalc.bind(this)
    );
  }

  // Open Calc
  _openCalc(e) {
    this._calc.getElement().hidden = false;
  }

  // DnD Icon
  _dndIcon(e) {
    let dndoptions = {
      elem  : this._icon.getElement(),
      parent: this.getElement(),
      ifTarget(target) {
        if (!target.closest(`${appName}__icon`)) {
          return;
        }
      }
    };

    dragNdrop(e.detail, dndoptions);
  }

  // DnD Calc
  _dndCalc(e) {
    let dndoptions = {
      elem  : this._calc.getElement(),
      parent: this.getElement(),
      ifTarget(target) {
        if (
           target.closest(`${appName}__top-button`) ||
          !target.closest(`${appName}__top-panel`)
        ) {
          return;
        }
      }
    };

    dragNdrop(e.detail, dndoptions);
  }

  // Close Calc
  _closeCalc() {
    this._calc.getElement().hidden = true;
  }

}
