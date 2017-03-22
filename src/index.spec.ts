declare var describe: any;
declare var beforeEach: any;
declare var it: any;
declare var expect: any;

import { Calc } from './index';

describe('Calc', () => {
    it('Testando soma comum', () => {
        expect(Calc.sum(1, 1)).toBe(2);
    });

    it('Testando soma com decimais', () => {
        expect(Calc.sum(1.5, 1)).toBe(2.5);
    });

    it('Testando soma com decimais problematicos', () => {
        expect(Calc.sum(Calc.sum(0.1, 0.1), 0.1)).toBe(0.3);
    });

    it('Testando soma letras', () => {
        expect(() => {
            Calc.sum(NaN, 1);
        }).toThrow();
    });
});