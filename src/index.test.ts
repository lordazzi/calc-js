/* eslint-disable */
import { Calc } from '.';

describe('Calc', () => {
  it('Testando soma comum', () => {
    expect(new Calc(1).sum(1).finish()).toBe(2);
  });

  it('Testando soma com decimais (1.5 + 1)', () => {
    expect(new Calc(1.5).sum(1).finish()).toBe(2.5);
  });

  it('Testando soma com decimais problematicos (0.1 + 0.1 + 0.1)', () => {
    expect(new Calc(0.1).sum(0.1).sum(0.1).finish()).toBe(0.3);
  });

  it('Testando soma com decimais problematicos (0.75 + 0.75)', () => {
    expect(new Calc(0.75).sum(0.75).finish()).toBe(1.5);
  });

  it('Testando soma com decimais problematicos (1.975 + 0.75)', () => {
    expect(new Calc(1.975).sum(0.75).finish()).toBe(2.725);
  });

  it('Testando soma com decimais problematicos (1.9 + 0.101)', () => {
    expect(new Calc(1.9).sum(0.101).finish()).toBe(2.001);
  });

  it('Testando soma com decimais problematicos (1.9 + 0.001)', () => {
    expect(new Calc(1.9).sum(0.001).finish()).toBe(1.901);
  });

  it('Testando soma com decimais (593.33 + 1000.01)', () => {
    expect(new Calc(593.33).sum(1000.01).finish()).toBe(1593.34);
  });

  it('Testando soma com decimais (3.5 + -1)', () => {
    expect(new Calc(3.5).sum(-1).finish()).toBe(2.5);
  });

  it('Testando soma com decimais problematicos (0.4 + -0.1)', () => {
    expect(new Calc(0.4).sum(-0.1).finish()).toBe(0.3);
  });

  it('Testando soma com decimais problematicos (2 + -0.5)', () => {
    expect(new Calc(2).sum(-0.5).finish()).toBe(1.5);
  });

  it('Testando soma com decimais problematicos (1.975 + -0.75)', () => {
    expect(new Calc(4.975).sum(-2.25).finish()).toBe(2.725);
  });

  it('Testando soma com decimais problematicos (2.1 + -0.101)', () => {
    expect(new Calc(2.1).sum(-0.101).finish()).toBe(1.999);
  });

  it('Testando soma com decimais problematicos (1.9 + -0.001)', () => {
    expect(new Calc(1.9).sum(-0.001).finish()).toBe(1.899);
  });

  it('Testando soma com decimais problematicos (0.3 + -0.5)', () => {
    expect(new Calc(0.3).sum(-0.5).finish()).toBe(-0.2);
  });

  it('Testando soma com decimais problematicos (0.5 + -0.3)', () => {
    expect(new Calc(0.5).sum(-0.3).finish()).toBe(0.2);
  });

  it('Testando soma com decimais problematicos (0.5 + -0.3)', () => {
    expect(new Calc(1.501).sum(2.3).finish()).toBe(3.801);
  });

  it('Testando subtração com decimais (3.5 - 1)', () => {
    expect(new Calc(3.5).minus(1).finish()).toBe(2.5);
  });

  it('Testando subtração com decimais problematicos (0.4 - 0.1)', () => {
    expect(new Calc(0.4).minus(0.1).finish()).toBe(0.3);
  });

  it('Testando subtração com decimais problematicos (2 - 0.5)', () => {
    expect(new Calc(2).minus(0.5).finish()).toBe(1.5);
  });

  it('Testando subtração com decimais problematicos (1.975 - 0.75)', () => {
    expect(new Calc(4.975).minus(2.25).finish()).toBe(2.725);
  });

  it('Testando subtração com decimais problematicos (1.9 - 0.101)', () => {
    expect(new Calc(2.1).minus(0.101).finish()).toBe(1.999);
  });

  it('Testando subtração com decimais problematicos (2499.9 - 1500)', () => {
    expect(new Calc(2499.9).minus(1500).finish()).toBe(999.9);
  });

  it('Testando subtração com decimais problematicos (2499.9 - 1500 - 999.9)', () => {
    expect(new Calc(2499.9).minus(1500).minus(999.9).finish()).toBe(0);
  });

  it('Testando subtração com decimais problematicos (1.9 - 0.001)', () => {
    expect(new Calc(1.9).minus(0.001).finish()).toBe(1.899);
  });

  it('Testando subtração com decimais (1.5 - -1)', () => {
    expect(new Calc(1.5).minus(-1).finish()).toBe(2.5);
  });

  it('Testando subtração com decimais (1000 - 593.33)', () => {
    expect(new Calc(1000).minus(593.33).finish()).toBe(406.67);
  });

  it('Testando subtração com decimais problematicos (-0.4 - -0.1)', () => {
    expect(new Calc(-0.4).minus(-0.1).finish()).toBe(-0.3);
  });

  it('Testando subtração com decimais problematicos (0.75 - -0.75)', () => {
    expect(new Calc(0.75).minus(-0.75).finish()).toBe(1.5);
  });

  it('Testando subtração com decimais problematicos (1.975 - -0.75)', () => {
    expect(new Calc(1.975).minus(-0.75).finish()).toBe(2.725);
  });

  it('Testando subtração com decimais problematicos (1.9 - -0.101)', () => {
    expect(new Calc(1.9).minus(-0.101).finish()).toBe(2.001);
  });

  it('Testando subtração com decimais problematicos (1.9 - -0.001)', () => {
    expect(new Calc(1.9).minus(-0.001).finish()).toBe(1.901);
  });

  it('Testando subtração com decimais problematicos (1 - 2)', () => {
    expect(new Calc(1).minus(2).finish()).toBe(-1);
  });

  it('Testando cálculo com decimais problematicos (2199 / 100 * 5)', () => {
    expect(new Calc(2199).divide(100).multiply(5).finish()).toBe(109.95);
  });

  it('Testando cálculo com multiplicação com decimal (0.56 * 100)', () => {
    expect(new Calc(0.56).multiply(100).finish()).toBe(56);
  });

  it('Testando cálculo com multiplicação com decimal (593.33 * 100)', () => {
    expect(new Calc(593.33).multiply(100).finish()).toBe(59333);
  });

  it('Testando cálculo com multiplicação com decimal (17.99 * 100)', () => {
    expect(new Calc(17.99).multiply(100).finish()).toBe(1799);
  });

  it('Testando cálculo com multiplicação com dois decimais (5.6 * 5.6)', () => {
    expect(new Calc(5.6).multiply(5.6).finish()).toBe(31.36);
  });

  it('Testando cálculo com multiplicação com dois decimais (0.56 * 0.56)', () => {
    expect(new Calc(0.56).multiply(0.56).finish()).toBe(0.3136);
  });

  it('Testando cálculo com multiplicação com um decimal (100 * 0.56)', () => {
    expect(new Calc(100).multiply(0.56).finish()).toBe(56);
  });

  it('Testando cálculo com divisão com decimal (5.6 / 10)', () => {
    expect(new Calc(5.6).divide(10).finish()).toBe(0.56);
  });

  it('Testando cálculo com divisão com decimal (593.33 / 10)', () => {
    expect(new Calc(593.33).divide(10).finish()).toBe(59.333);
  });

  it('Testando soma números invalidos', () => {
    expect(() => new Calc(1).sum(NaN).finish()).toThrow();
  });

  it('Testando soma com valores infinitos', () => {
    expect(() => new Calc(1).sum(Infinity).finish()).toThrow();
  });

  it('Testando soma com valores infinitos', () => {
    expect(() => new Calc(1).sum(-Infinity).finish()).toThrow();
  });

  it('Testando cálculo com divisão por zero', () => {
    expect(() => new Calc(10).sum(10).divide(0).minus(1).finish()).toThrow();
  });

  it('Testando cálculo com números gigantes', () => {
    expect(() => new Calc(1232132131).multiply(1232132131).finish()).toThrow();
  });

  it('Testando cálculo com números decimais gigantes', () => {
    expect(() => new Calc(0.00000000001).sum(0.100000000001).finish()).toThrow();
  });
});
