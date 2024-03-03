import { LauchErrorStrategy } from '../launch-error-strategy.type';

export interface CalcConfig {
  thrownStrategy?: LauchErrorStrategy;
  throwNaN?: boolean;
  throwInfinite?: boolean;
  throwUnsafeNumber?: boolean;
}
