import { CalcConfig } from '../config/calc-config';
import { Equation } from '../domain/equation.model';
import { equationStringify } from './equation.stringify';

export class NumberValidator {

  private static instance: NumberValidator | null = null;

  static getInstance(): NumberValidator {
    if (!this.instance) {
      this.instance = new NumberValidator();
    }

    return this.instance;
  }

  private constructor() { }

  validate(
    value: number,
    executedEquation: Equation,
    completeEquation: Equation,
    calcConfig: CalcConfig
  ): string | null {
    let errorMessage: string | null = null;
    if (calcConfig.throwNaN) {
      errorMessage = this.checkNaN(value);
    }

    if (!errorMessage && calcConfig.throwInfinite) {
      errorMessage = this.checkInfinite(value);
    }

    if (!errorMessage && calcConfig.throwUnsafeNumber) {
      errorMessage = this.checkUnsafeNumber(value);
    }

    if (errorMessage) {
      return this.generateErrorMessage(executedEquation, completeEquation, errorMessage);
    }

    return null;
  }

  private generateErrorMessage(
    executedEquation: Equation,
    completeEquation: Equation,
    errorMessage: string
  ): string {
    const executedEquationStr = equationStringify(executedEquation);
    const completeEquationStr = equationStringify(completeEquation);

    return `Error on ${executedEquationStr} in equation ${completeEquationStr}, ${errorMessage}`;
  }

  checkNaN(value: number): string | null {
    if (isNaN(value)) {
      return `the result is ${value}.`;
    }

    return null;
  }

  checkInfinite(value: number): string | null {
    if (!Number.isFinite(value)) {
      return `the result is ${value}.`;
    }

    return null;
  }

  checkUnsafeNumber(value: number): string | null {
    const isSafeInteger = !!String(value).split('.').find(str => !Number.isSafeInteger(Number(str)));

    if (isSafeInteger) {
      return `the result is ${value} and it is not a secure number.`;
    }

    return null;
  }
}
