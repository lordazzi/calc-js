import { Operation } from './operation.model';

export interface Equation {
  baseNumber: number;
  operations: [Operation, ...Operation[]];
}
