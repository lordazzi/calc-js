import { Operator } from './operator.type';

export type Operation = {
  value: number;
  type: Operator;
} | ((n: number) => number);
