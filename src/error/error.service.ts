import { CalcConfig } from '../config/calc-config';
import { CalcError } from './calc-error';

export class ErrorService {

  private static instance: ErrorService | null = null;

  private errorEventEmitter: ((error: CalcError) => void) | null = null;

  static getInstance(): ErrorService {
    if (!this.instance) {
      this.instance = new ErrorService();
    }

    return this.instance;
  }

  private constructor() { }

  onError(calle: (error: CalcError) => void): void {
    this.errorEventEmitter = calle;
  }

  emitError(config: CalcConfig, error: string): void {
    const calcError = new CalcError(error);
    if (config.thrownStrategy === 'emit-event' && this.errorEventEmitter) {
      this.errorEventEmitter(calcError);
    } else if (config.thrownStrategy === 'console') {
      console.error(calcError);
    } else {
      throw calcError;
    }
  }
}
