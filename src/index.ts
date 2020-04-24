import { CalcBuild } from './calculate/calc-build';
import { CalcConfig } from './config/calc-config';
import { Operation } from './domain/operation.model';
import { equationTypeGuard } from './equation.type-guard';
import { CalcError } from './error/calc-error';
import { NumberValidator } from './validator/number.validator';

export class Calc {

  private static defaultConfig: CalcConfig = {
    thrownStrategy: 'thrown',
    throwNaN: true,
    throwInfinite: true,
    throwUnsafeNumber: true
  };

  private readonly calcBuild = CalcBuild.getInstance();
  private readonly numberValidator = NumberValidator.getInstance();

  private operations: Operation[] = [];

  static configure(config: CalcConfig): void {
    if (config.thrownStrategy !== undefined) {
      this.defaultConfig.thrownStrategy = config.thrownStrategy;
    }

    if (config.throwNaN !== undefined) {
      this.defaultConfig.throwNaN = config.throwNaN;
    }

    if (config.throwInfinite !== undefined) {
      this.defaultConfig.throwInfinite = config.throwInfinite;
    }

    if (config.throwUnsafeNumber !== undefined) {
      this.defaultConfig.throwUnsafeNumber = config.throwUnsafeNumber;
    }
  }

  static checkNumber(numeric: number): void {
    //  it will throw if this isn't a valid number
    //  sinalizar que este método só serve para validar se o número é
    //  javascripticamente usável e não validar se este se aplica específicamente
    //  a uma necessidade de negócio, como um valor precisamente inteiro, um valor
    //  decimal de até duas casas, se negativo ou não negativo, estas validações
    //  vão além da proposta desta biblioteca
  }

  constructor(
    private readonly baseNumber: number,
    private customConfig: CalcConfig = Calc.defaultConfig
  ) {
    this.customConfig = this.mergeConfigs(this.customConfig, Calc.defaultConfig);
  }

  private mergeConfigs(customConfig: CalcConfig, defaultConfig: CalcConfig): CalcConfig {
    if (defaultConfig.thrownStrategy !== undefined) {
      customConfig.thrownStrategy = defaultConfig.thrownStrategy;
    }

    if (defaultConfig.throwNaN !== undefined) {
      customConfig.throwNaN = defaultConfig.throwNaN;
    }

    if (defaultConfig.throwInfinite !== undefined) {
      customConfig.throwInfinite = defaultConfig.throwInfinite;
    }

    if (defaultConfig.throwUnsafeNumber !== undefined) {
      customConfig.throwUnsafeNumber = defaultConfig.throwUnsafeNumber;
    }

    return customConfig;
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

  calculate(): number {
    const operations = this.operations;
    const baseNumber = this.baseNumber;

    if (equationTypeGuard(operations)) {
      return this.calcBuild.calculate({
        baseNumber, operations
      });
    }

    throw new CalcError(`More then one number is needed to create an equation, only the number ${this.baseNumber} was given`);
  }
}

//  TODO: deixar claro  que biblioteca não remove casas decimais, ela apenas impede que os números
//  resultantes sejam representados de forma incorreta
