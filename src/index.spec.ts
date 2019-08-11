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

	it('Testando soma com decimais problematicos (0.75 + 0.75 + 1 + 0.00001)', () => {
		expect(Calc.sum(0.75, 0.75, 1, 0.00001)).toBe(2.50001);
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

	it('Testando soma com decimais problematicos (0.5 + -0.3)', () => {
		expect(Calc.sum(1.501, 2.3)).toBe(3.801);
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

	it('Testando subtração com decimais problematicos (2499.9 - 1500)', () => {
		expect(Calc.minus(2499.9, 1500)).toBe(999.9);
	});

	it('Testando subtração com decimais problematicos (2499.9 - 1500 - 999.9)', () => {
		expect(Calc.minus(Calc.minus(2499.9, 1500), 999.9)).toBe(0);
	});

	it('Testando cálculo com decimais problematicos (2199 / 100 * 5)', () => {
		expect(Calc.multiply(Calc.divide(2199, 100), 5)).toBe(109.95);
	});

	it('Testando cálculo com multiplicação com decimal (0.56 * 100)', () => {
		expect(Calc.multiply(0.56, 100)).toBe(56);
	});

	it('Testando cálculo com multiplicação com decimal (17.99 * 100)', () => {
		expect(Calc.multiply(17.99, 100)).toBe(1799);
	});

	it('Testando cálculo com multiplicação com dois decimais (5.6 * 5.6)', () => {
		expect(Calc.multiply(5.6, 5.6)).toBe(31.36);
	});

	it('Testando cálculo com multiplicação com dois decimais (0.56 * 0.56)', () => {
		expect(Calc.multiply(0.56, 0.56)).toBe(0.3136);
	});

	it('Testando cálculo com multiplicação com dois decimais (100 * 0.56)', () => {
		expect(Calc.multiply(100, 0.56)).toBe(56);
	});

	it('Testando cálculo com divisão com decimal (5.6 / 10)', () => {
		expect(Calc.divide(5.6, 10)).toBe(0.56);
	});

	it('Testando soma com letras', () => {
		expect(() => {
			Calc.sum(NaN, 1);
		}).toThrow();
	});

	it('Testando subtração com letras', () => {
		expect(() => {
			Calc.minus(NaN, 1);
		}).toThrow();
	});
});
