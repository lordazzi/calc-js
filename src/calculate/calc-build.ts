import { CalcConfig } from '../config/calc-config';
import { ConfigService } from '../config/config.service';
import { Operation } from '../domain/operation.model';
import { Operator } from '../domain/operator.type';
import { NumberValidator } from '../validator/number.validator';
import { Equation } from './../domain/equation.model';
import { ErrorService } from './../error/error.service';
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

  private readonly numberValidator = NumberValidator.getInstance();
  private readonly errorService = ErrorService.getInstance();

  static getInstance(): CalcBuild {
    if (!this.instance) {
      this.instance = new CalcBuild();
    }

    return this.instance;
  }

  static configure(config: CalcConfig): void {
    ConfigService.configure(config);
  }

  private constructor() { }

  calculate(config: CalcConfig, equation: Equation): number {
    const executedEquation: {
      baseNumber: number;
      operations: Operation[];
    } = {
      baseNumber: equation.baseNumber,
      operations: []
    };

    const equationCopy: Operation[] = ([] as Operation[]).concat(equation.operations);
    let operation: Operation | undefined;
    let finalResult = equation.baseNumber;

    while (operation = equationCopy.shift()) {
      finalResult = CalcBuild.calcMap[operation.type](finalResult, operation.value);
      executedEquation.operations.push(operation);
      const errorMessage = this.numberValidator.validate(
        finalResult, executedEquation as Equation, equation, config
      );

      if (errorMessage) {
        this.errorService.emitError(config, errorMessage);
      }
    }

    return finalResult;
  }
}
