if (define.clazzes) {
  if (typeof window !== 'undefined') {
    window.Calc = define.clazzes.Calc;
    window.CalcError = define.clazzes.CalcError;
  }

  if (typeof module !== 'undefined' && 'export' in module) {
    module.exports = {
      Calc: define.clazzes.Calc,
      CalcError: define.clazzes.CalcError
    };
  }
}
