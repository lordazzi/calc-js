var window = window || global;
var define = typeof define !== 'undefined' ? define : function define(name, argsNames, calle) {
  define.clazzes = define.clazzes = {}
  calle.apply(null, argsNames.map(() => define.clazzes));
};

define("calc-global-exports", ["require", "exports", "calc", "calc", "error/calc-error"], function (require, exports, calc_1, calc_error_2) {
  "use strict";
  function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
  Object.defineProperty(exports, "__esModule", { value: true });
  __export(calc_1);
  __export(calc_error_2);
  if (typeof window !== 'undefined') {
    window.Calc = define.clazzes.Calc;
  }

  if (typeof module !== 'undefined' && 'export' in module) {
    module.exports = define.clazzes.Calc;
  }

});