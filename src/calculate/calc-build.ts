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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  calculate(equation: Equation, config: CalcConfig): number {
    this.validateEquation(equation, config);
    const executedEquation = this.createExecutedEquation(equation);
    const equationCopy: Operation[] = ([] as Operation[]).concat(equation.operations);
    let operation: Operation | undefined;
    let finalResult = equation.baseNumber;

    while (operation = equationCopy.shift()) {
      if (typeof operation === 'function') {
        finalResult = operation(finalResult);
      } else {
        finalResult = CalcBuild.calcMap[operation.type](finalResult, operation.value);
      }

      executedEquation.operations.push(operation);
      this.validate(finalResult, executedEquation as Equation, equation, config);
    }

    return finalResult;
  }

  private createExecutedEquation(equation: Equation): {
    baseNumber: number;
    operations: Operation[];
  } {
    return {
      baseNumber: equation.baseNumber,
      operations: []
    };
  }

  private validate(
    value: number, executedEquation: Equation | null, equation: Equation, config: CalcConfig
  ): void {
    const errorMessage = this.numberValidator.validate(
      value, executedEquation, equation, config
    );

    if (errorMessage) {
      this.errorService.emitError(config, errorMessage);
    }
  }

  private validateEquation(equation: Equation, config: CalcConfig): void {
    this.validate(equation.baseNumber, null, equation, config);

    equation.operations.forEach(operation => {
      if (typeof operation !== 'function') {
        this.validate(operation.value, null, equation, config);
      }
    });
  }
}
