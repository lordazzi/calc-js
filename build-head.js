var define = typeof define !== 'undefined' ? define : function define(name, argsNames, calle) {
  define.clazzes = define.clazzes || {}
  calle.apply(null, argsNames.map(() => define.clazzes));
};
