import { Operation } from './domain/operation.model';

export function equationTypeGuard(operations: Operation[]): operations is [Operation, ...Operation[]] {
  if (operations[0]) {
    return true;
  }

  return false;
}
