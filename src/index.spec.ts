declare var describe: any;
declare var beforeEach: any;
declare var it: any;
declare var expect: any;

import { Calc } from './index';

describe('Calc', () => {
    it('Testando soma comum', () => {
        expect(Calc.sum(1, 1)).toBe(2);
    });

    it('Testando soma com decimais (1.5 + 1)', () => {
        expect(Calc.sum(1.5, 1)).toBe(2.5);
    });

    it('Testando soma com decimais problematicos (0.1 + 0.1 + 0.1)', () => {
        expect(Calc.sum(Calc.sum(0.1, 0.1), 0.1)).toBe(0.3);
    });

    it('Testando soma com decimais problematicos (0.75 + 0.75)', () => {
        expect(Calc.sum(0.75, 0.75)).toBe(1.5);
    });

    it('Testando soma com decimais problematicos (1.975 + 0.75)', () => {
        expect(Calc.sum(1.975, 0.75)).toBe(2.725);
    });

    it('Testando soma com decimais problematicos (1.9 + 0.101)', () => {
        expect(Calc.sum(1.9, 0.101)).toBe(2.001);
    });

    it('Testando soma com decimais problematicos (1.9 + 0.001)', () => {
        expect(Calc.sum(1.9, 0.001)).toBe(1.901);
    });

    it('Testando soma com decimais (3.5 + -1)', () => {
        expect(Calc.sum(3.5, -1)).toBe(2.5);
    });

    it('Testando soma com decimais problematicos (0.4 + -0.1)', () => {
        expect(Calc.sum(0.4, -0.1)).toBe(0.3);
    });

    it('Testando soma com decimais problematicos (2 + -0.5)', () => {
        expect(Calc.sum(2, -0.5)).toBe(1.5);
    });

    it('Testando soma com decimais problematicos (1.975 + -0.75)', () => {
        expect(Calc.sum(4.975, -2.25)).toBe(2.725);
    });

    it('Testando soma com decimais problematicos (2.1 + -0.101)', () => {
        expect(Calc.sum(2.1, -0.101)).toBe(1.999);
    });

    it('Testando soma com decimais problematicos (1.9 + -0.001)', () => {
        expect(Calc.sum(1.9, -0.001)).toBe(1.899);
    });

    it('Testando soma com decimais problematicos (0.3 + -0.5)', () => {
        expect(Calc.sum(0.3, -0.5)).toBe(-0.2);
    });

    it('Testando soma com decimais problematicos (0.5 + -0.3)', () => {
        expect(Calc.sum(0.5, -0.3)).toBe(0.2);
    });

    it('Testando subtração com decimais (3.5 - 1)', () => {
        expect(Calc.minus(3.5, 1)).toBe(2.5);
    });

    it('Testando subtração com decimais problematicos (0.4 - 0.1)', () => {
        expect(Calc.minus(0.4, 0.1)).toBe(0.3);
    });

    it('Testando subtração com decimais problematicos (2 - 0.5)', () => {
        expect(Calc.minus(2, 0.5)).toBe(1.5);
    });

    it('Testando subtração com decimais problematicos (1.975 - 0.75)', () => {
        expect(Calc.minus(4.975, 2.25)).toBe(2.725);
    });

    it('Testando subtração com decimais problematicos (1.9 - 0.101)', () => {
        expect(Calc.minus(2.1, 0.101)).toBe(1.999);
    });

    it('Testando subtração com decimais problematicos (1.9 - 0.001)', () => {
        expect(Calc.minus(1.9, 0.001)).toBe(1.899);
    });

    it('Testando subtração com decimais (1.5 - -1)', () => {
        expect(Calc.minus(1.5, -1)).toBe(2.5);
    });

    it('Testando subtração com decimais problematicos (-0.4 - -0.1)', () => {
        expect(Calc.minus(-0.4, -0.1)).toBe(-0.3);
    });

    it('Testando subtração com decimais problematicos (0.75 - -0.75)', () => {
        expect(Calc.minus(0.75, -0.75)).toBe(1.5);
    });

    it('Testando subtração com decimais problematicos (1.975 - -0.75)', () => {
        expect(Calc.minus(1.975, -0.75)).toBe(2.725);
    });

    it('Testando subtração com decimais problematicos (1.9 - -0.101)', () => {
        expect(Calc.minus(1.9, -0.101)).toBe(2.001);
    });

    it('Testando subtração com decimais problematicos (1.9 - -0.001)', () => {
        expect(Calc.minus(1.9, -0.001)).toBe(1.901);
    });

    it('Testando subtração com decimais problematicos (1 - 2)', () => {
        expect(Calc.minus(1, 2)).toBe(-1);
    });

    it('Testando cálculo com decimais problematicos (2199 / 100 * 5)', () => {
        expect(Calc.multiply(Calc.divide(2199, 100), 5)).toBe(109.95);
    });

    it('Testando soma letras', () => {
        expect(() => {
            Calc.sum(NaN, 1);
        }).toThrow();
    });
});