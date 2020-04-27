export function multiply(n1: number, n2: number): number {
  if (n1 % 1 === 0 && n2 % 1 === 0) {
    return n1 * n2;
  }

  let n1Length: number, n2Length: number,
    n1BaseDecimal: string | number = 1,
    n2BaseDecimal: string | number = 1;

  if (n1 % 1 !== 0) {
    n1Length = String(n1).replace(/\d+\.?/, '').length;
    while (n1Length--) {
      n1BaseDecimal = `${n1BaseDecimal}0`;
    }
    n1BaseDecimal = Number(n1BaseDecimal);
  }

  if (n2 % 1 !== 0) {
    n2Length = String(n2).replace(/\d+\.?/, '').length;
    while (n2Length--) {
      n2BaseDecimal = `${n2BaseDecimal}0`;
    }
    n2BaseDecimal = Number(n2BaseDecimal);
  }

  n1 = Math.round(n1 * n1BaseDecimal);
  n2 = Math.round(n2 * n2BaseDecimal);

  return (n1 * n2) / (n1BaseDecimal * n2BaseDecimal);
}
