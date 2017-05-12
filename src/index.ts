
export class Calc {

    public static sum(n1: number, n2: number): number {
        if (n1 % 1 === 0 && n2 % 1 === 0) {
            return n1 + n2;
        }

        let n1Length = String(n1).replace(/\d+\.?/, '').length,
            n2Length = String(n2).replace(/\d+\.?/, '').length,
            length = n1Length > n2Length ? n1Length : n2Length;

        let baseDecimal: string | number = '1';
        while (length--) baseDecimal = `${baseDecimal}0`;
        baseDecimal = Number(baseDecimal);

        n1 = n1 * baseDecimal;
        n2 = n2 * baseDecimal;

        return (n1 + n2) / baseDecimal;
    }

    public static minus(n1: number, n2: number): number {
        if (n1 % 1 === 0 && n2 % 1 === 0) {
            return n1 - n2;
        }

        let n1Length = String(n1).replace(/\d+\.?/, '').length,
            n2Length = String(n2).replace(/\d+\.?/, '').length,
            length = n1Length > n2Length ? n1Length : n2Length;

        let baseDecimal: string | number = '1';
        while (length--) baseDecimal = `${baseDecimal}0`;
        baseDecimal = Number(baseDecimal);

        n1 = n1 * baseDecimal;
        n2 = n2 * baseDecimal;

        return (n1 - n2) / baseDecimal;
    }

    public static divide(n1: number, n2: number): number {

        let length = String(n1 / n2).replace(/\d+\.?/, '').length;
        let baseDecimal: string | number = '1';
        while (length--) baseDecimal = `${baseDecimal}0`;
        baseDecimal = Number(baseDecimal);

        n1 = n1 * baseDecimal;

        return (n1 / n2) / baseDecimal;
    }


    public static multiply(n1: number, n2: number): number {
        if (n1 % 1 === 0 && n2 % 1 === 0) {
            return n1 * n2;
        }

        let n1Length = String(n1).replace(/\d+\.?/, '').length,
            n2Length = String(n2).replace(/\d+\.?/, '').length,
            length = n1Length + n2Length;

        let baseDecimal: string | number = '1';
        while (length--) baseDecimal = `${baseDecimal}0`;
        baseDecimal = Number(baseDecimal);

        n1 = n1 * baseDecimal;

        return (n1 * n2) / baseDecimal;
    }
}