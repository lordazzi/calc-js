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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  validate(
    value: number,
    executedEquation: Equation | null,
    completeEquation: Equation,
    calcConfig: CalcConfig
  ): string | null {
    const errorMessage = this.validateSingleNumber(value, undefined, calcConfig);

    if (errorMessage) {
      return this.generateErrorMessage(value, executedEquation, completeEquation, errorMessage);
    }

    return null;
  }

  validateSingleNumber(
    value: number,
    complementaryErrorMessage?: string,
    customConfig?: CalcConfig
  ): string | null {
    const config = ConfigService.getInstance().createConfigs(customConfig);

    if (config.throwNaN) {
      const checkNaNMessage = this.checkNaN(value);
      if (checkNaNMessage) {
        return this.joinMessages(checkNaNMessage, complementaryErrorMessage);
      }
    }

    if (config.throwInfinite) {
      const checkInfiniteMessage = this.checkInfinite(value);
      if (checkInfiniteMessage) {
        return this.joinMessages(checkInfiniteMessage, complementaryErrorMessage);
      }
    }

    if (config.throwUnsafeNumber) {
      const checkUnsafeNumberMessage = this.checkUnsafeNumber(value);
      if (checkUnsafeNumberMessage) {
        return this.joinMessages(checkUnsafeNumberMessage, complementaryErrorMessage);
      }
    }

    return null;
  }

  private joinMessages(message: string, complementaryErrorMessage: string | undefined): string {
    if (complementaryErrorMessage) {
      return `${complementaryErrorMessage}\n${message}`;
    }

    return message;
  }

  private generateErrorMessage(
    value: number,
    executedEquation: Equation | null,
    completeEquation: Equation,
    errorMessage: string
  ): string {
    const completeEquationStr = equationStringify(completeEquation);

    if (executedEquation) {
      if (executedEquation.operations.length === completeEquation.operations.length) {
        return `Invalid result value in equation ${completeEquationStr}, ${errorMessage}`;
      } else {
        const executedEquationStr = equationStringify(executedEquation);
        return `Invalid result value in ${executedEquationStr} in equation ${completeEquationStr}, ${errorMessage}`;
      }
    } else {
      return `Invalid value ${value} in equation ${completeEquationStr}, ${errorMessage}`;
    }
  }

  private checkNaN(value: number): string | null {
    if (isNaN(value)) {
      return `NaN was found`;
    }

    return null;
  }

  private checkInfinite(value: number): string | null {
    if (!Number.isFinite(value) && !Number.isNaN(value)) {
      return `infinite value was found`;
    }

    return null;
  }

  private checkUnsafeNumber(value: number): string | null {
    const isSafeInteger = !!String(value).split('.').find(str => !Number.isSafeInteger(Number(str)));

    if (isSafeInteger) {
      return `${value} is not a secure number`;
    }

    return null;
  }
}
