import { Calc } from './calc';
export * from './calc';
export * from './config/calc-config';
export * from './error/calc-error';

declare const window: Window & { [prop: string]: any };

if (window) {
  window.Calc = Calc;
}

if ('exports' in module) {
  module.exports = Calc;
}
