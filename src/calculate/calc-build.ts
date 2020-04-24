import { Equation } from '../domain/equation.model';
import { Operation } from '../domain/operation.model';
import { Operator } from '../domain/operator.type';
import { divide } from './divide';
import { minus } from './minus';
import { multiply } from './multiply';
import { sum } from './sum';

export class CalcBuild {

  private static instance: CalcBuild | null = null;

  private static readonly calcMap: {
    [operation in Operator]: (x: number, y: number) => number
  } = {
      '+': sum,
      '-': minus,
      '/': divide,
      '*': multiply
    };

  static getInstance(): CalcBuild {
    if (!this.instance) {
      this.instance = new CalcBuild();
    }

    return this.instance;
  }

  private constructor() { }

  calculate(equation: Equation): number {
    const executedEquation: Operation[] = [];
    const equationCopy: Operation[] = ([] as Operation[]).concat(equation.operations);
    let operation: Operation | undefined;
    let finalResult = equation.baseNumber;

    while (operation = equationCopy.shift()) {
      finalResult = CalcBuild.calcMap[operation.type](finalResult, operation.value);
      executedEquation.push(operation);
    }

    return finalResult;
  }
}
