if (define.clazzes) {
  if (typeof window !== 'undefined') {
    window.Calc = define.clazzes.Calc;
    window.CalcError = define.clazzes.CalcError;
  }

  if (typeof module !== 'undefined' && 'exports' in module) {
    module.exports = define.clazzes;
  }

  if (typeof exports !== 'undefined') {
    exports = define.clazzes;
  }
}
