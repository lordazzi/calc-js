
export class Calc {

    public static sum(n1: number, n2: number) {
        if (n1 % 1 === 0 && n2 % 1 === 0) {
            return n1 + n2;
        }

        let n1Negativo: boolean = (n1 < 0),
        n2Negativo: boolean = (n2 < 0);

        n1 = Number(String(n1).replace(/\-/, ''));
        n2 = Number(String(n2).replace(/\-/, ''));

        if (n1Negativo && n2Negativo) {
            return -this.sum(n1, n2);
        } else if (n1Negativo) {
            return this.minus(n2, n1);
        } else if (n2Negativo) {
            return this.minus(n1, n2);
        }

        // contexto tratado somente para valores decimais
        let strInteiro1: string, strInteiro2: string, strDecimal1: string, strDecimal2: string, matches: RegExpMatchArray;
        let resultadoInteiro: number, resultadoDecimal: number | string;
        let lengthDecimal: number, quantidadeASerAdicionadoNoInteiro = 0;

        matches = String(n1).match(/[\-0-9]+/g);
        strInteiro1 = matches[0];
        strDecimal1 = matches[1] || '0';

        matches = String(n2).match(/[\-0-9]+/g);
        strInteiro2 = matches[0];
        strDecimal2 = matches[1] || '0';

        lengthDecimal = strDecimal1.length > strDecimal2.length ? strDecimal1.length : strDecimal2.length;
        if (strDecimal1.length !== strDecimal2.length) {
            while (strDecimal1.length != lengthDecimal) strDecimal1 = `${strDecimal1}0`;
            while (strDecimal2.length != lengthDecimal) strDecimal2 = `${strDecimal2}0`;
        }

        resultadoDecimal = String(Number(strDecimal1) + Number(strDecimal2));
        if (resultadoDecimal.length > lengthDecimal) {
            let diferenca = resultadoDecimal.length - lengthDecimal;
            quantidadeASerAdicionadoNoInteiro = Number(resultadoDecimal.substr(0, diferenca));
            resultadoDecimal = resultadoDecimal.substr(diferenca);
        }

        while (resultadoDecimal.length < lengthDecimal) {
            resultadoDecimal = `0${resultadoDecimal}`;
        }

        return Number(`${Number(strInteiro1) + Number(strInteiro2) + Number(quantidadeASerAdicionadoNoInteiro)}.${resultadoDecimal}`);
    }

    public static minus(n1: number, n2: number) {
        return n1 - n2;
    }

    public static divide(n1: number, n2: number) {
        return n1 / n2;
    }


    public static multiply(n1: number, n2: number) {
        return n1 * n2;
    }
}