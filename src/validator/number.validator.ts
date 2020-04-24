import { CalcConfig } from '../config/calc-config';
import { Equation } from '../domain/equation.model';
import { ConfigService } from './../config/config.service';
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
    const errorMessage = this.validateSingleNumber(value, calcConfig);

    if (errorMessage) {
      return this.generateErrorMessage(executedEquation, completeEquation, errorMessage);
    }

    return null;
  }

  validateSingleNumber(value: number, customConfig?: CalcConfig): string | null {
    const config = ConfigService.getInstance().createConfigs(customConfig);

    if (config.throwNaN) {
      return this.checkNaN(value);
    }

    if (config.throwInfinite) {
      return this.checkInfinite(value);
    }

    if (config.throwUnsafeNumber) {
      return this.checkUnsafeNumber(value);
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

  private checkNaN(value: number): string | null {
    if (isNaN(value)) {
      return `the result is ${value}.`;
    }

    return null;
  }

  private checkInfinite(value: number): string | null {
    if (!Number.isFinite(value)) {
      return `the result is ${value}.`;
    }

    return null;
  }

  private checkUnsafeNumber(value: number): string | null {
    const isSafeInteger = !!String(value).split('.').find(str => !Number.isSafeInteger(Number(str)));

    if (isSafeInteger) {
      return `the result is ${value} and it is not a secure number.`;
    }

    return null;
  }
}
