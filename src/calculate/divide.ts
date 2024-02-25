export function divide(n1: number, n2: number): number {
  let length = String(n1 / n2).replace(/\d+\.?/, '').length;
  let baseDecimal: string | number = '1';
  while (length--) {
    baseDecimal = `${baseDecimal}0`;
  }
  baseDecimal = Number(baseDecimal);

  n1 = Math.round(n1 * baseDecimal);

  return (n1 / n2) / baseDecimal;
}
