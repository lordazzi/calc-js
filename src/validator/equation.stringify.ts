import { Equation } from '../domain/equation.model';
import { Operation } from '../domain/operation.model';

export function equationStringify(equation: Equation): string {
  let stringifiedEquation = String(equation.baseNumber);
  const operationsCopy: Operation[] = ([] as Operation[]).concat(equation.operations);
  let operation: Operation | undefined;

  while (operation = operationsCopy.shift()) {
    if (typeof operation === 'function') {
      stringifiedEquation = `(${stringifiedEquation} ${operation.name}(n) => n)`;
    } else {
      stringifiedEquation = `(${stringifiedEquation} ${operation.type} ${operation.value})`;
    }
  }

  return stringifiedEquation;
}
