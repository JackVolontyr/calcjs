'use strict';

class Icon extends Methods {
  constructor(options) {
    super();
    this._el = options.el;

    // Open Calc
    this._el.addEventListener(
      'dblclick', this._openCalcIcon.bind(this)
    );
    // DnD Icon
    this._el.addEventListener(
      'mousedown', this._dndIconIcon.bind(this)
    );
  }

  // Open Calc
  _openCalcIcon(e) {
    let customEvent = new CustomEvent('openCalcIcon');
    this._el.dispatchEvent(customEvent);
  }

  // DnD Icon
  _dndIconIcon(e) {
    let customEvent = new CustomEvent('dndIconIcon', {
      detail: e
    });

    this._el.dispatchEvent(customEvent);
  }
}
