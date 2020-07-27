import { CalcBuild } from './calculate/calc-build';
import { CalcConfig } from './config/calc-config';
import { ConfigService } from './config/config.service';
import { Operation } from './domain/operation.model';
import { equationTypeGuard } from './equation.type-guard';
import { CalcError } from './error/calc-error';
import { ErrorService } from './error/error.service';
import { NumberValidator } from './validator/number.validator';

export class Calc {

  private readonly calcBuild = CalcBuild.getInstance();
  private readonly configService = ConfigService.getInstance();
  private readonly errorService = ErrorService.getInstance();

  private operations: Operation[] = [];
  private customConfig = ConfigService.defaultConfig;

  /**
   * It will throw (or console it) if this isn't a valid number.
   * @returns if is valid return true, if is invalid return false.
   *
   * @param value
   * Number to be verified
   *
   * @param complementaryErrorMessage
   * Aditional information to add to the error object (this will come first)
   *
   * @param config
   * Some overriden configuration
   */
  static checkNumber(value: number, complementaryErrorMessage?: string, config?: CalcConfig): boolean {
    const errorMessage = NumberValidator.getInstance().validateSingleNumber(
      value, complementaryErrorMessage, config
    );

    if (errorMessage) {
      const definitiveConfig = ConfigService.getInstance().createConfigs(config);
      ErrorService.getInstance().emitError(definitiveConfig, errorMessage);

      return false;
    }

    return true;
  }

  static onError(calle: (error: CalcError) => void): void {
    ErrorService.getInstance().onError(calle);
  }

  static configure(config: CalcConfig): void {
    ConfigService.getInstance().createConfigs(config);
  }

  static sum(x: number, y: number, config?: CalcConfig): number {
    return new Calc(x, config).sum(y).finish();
  }

  static minus(x: number, y: number, config?: CalcConfig): number {
    return new Calc(x, config).minus(y).finish();
  }

  static divide(x: number, y: number, config?: CalcConfig): number {
    return new Calc(x, config).divide(y).finish();
  }

  static multiply(x: number, y: number, config?: CalcConfig): number {
    return new Calc(x, config).multiply(y).finish();
  }

  constructor(
    private readonly baseNumber: number,
    customConfig?: CalcConfig
  ) {
    this.customConfig = this.configService.createConfigs(customConfig);
  }

  sum(value: number): Calc {
    this.operations.push({ type: '+', value });
    return this;
  }

  minus(value: number): Calc {
    this.operations.push({ type: '-', value });
    return this;
  }

  divide(value: number): Calc {
    this.operations.push({ type: '/', value });
    return this;
  }

  multiply(value: number): Calc {
    this.operations.push({ type: '*', value });
    return this;
  }

  finish(): number {
    const operations = this.operations;
    const baseNumber = this.baseNumber;

    if (equationTypeGuard(operations)) {
      return this.calcBuild.calculate({
        baseNumber, operations
      }, this.customConfig);
    }

    return baseNumber;
  }
}
