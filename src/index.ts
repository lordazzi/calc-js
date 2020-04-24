import { CalcBuild } from './calculate/calc-build';
import { CalcConfig } from './config/calc-config';
import { ConfigService } from './config/config.service';
import { Operation } from './domain/operation.model';
import { equationTypeGuard } from './equation.type-guard';
import { ErrorService } from './error/error.service';
import { NumberValidator } from './validator/number.validator';

export class Calc {

  private readonly calcBuild = CalcBuild.getInstance();
  private readonly configService = ConfigService.getInstance();
  private readonly errorService = ErrorService.getInstance();

  private operations: Operation[] = [];
  private customConfig = ConfigService.defaultConfig;

  //  it will throw if this isn't a valid number
  //  sinalizar que este método só serve para validar se o número é
  //  javascripticamente usável e não validar se este se aplica específicamente
  //  a uma necessidade de negócio, como um valor precisamente inteiro, um valor
  //  decimal de até duas casas, se negativo ou não negativo, estas validações
  //  vão além da proposta desta biblioteca
  static checkNumber(value: number, config?: CalcConfig): void {
    NumberValidator.getInstance().validateSingleNumber(value, config);
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
      return this.calcBuild.calculate(this.customConfig, {
        baseNumber, operations
      });
    }

    this.errorService.emitError(
      this.customConfig, `More then one number is needed to create an equation, only the number ${this.baseNumber} was given`
    );

    return baseNumber;
  }
}

//  TODO: deixar claro  que biblioteca não remove casas decimais, ela apenas impede que os números
//  resultantes sejam representados de forma incorreta
