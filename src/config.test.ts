/* eslint-disable */
import { Calc, CalcError } from '.';

describe('Validando configurações com thrownStrategy em "thrown"', () => {
  it('Configurações em operação que deve quebrar por ocorrência de infinito', () => {

    expect(() => new Calc(10, {
      throwInfinite: true,
      throwNaN: true,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: true
    })
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Configurações em operação que deve quebrar por ocorrência de infinito', () => {

    expect(() => new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: true
    })
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Configurações em operação que deve quebrar por ocorrência de infinito', () => {

    expect(() => new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    })
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {

    expect(() => new Calc(10, {
      throwInfinite: false,
      throwNaN: true,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: true
    })
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Ignorando exceção para operação que resulta infinito', () => {

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    })
    .divide(0)
    .finish();

    expect(result).toBeGreaterThanOrEqual(Infinity);
  });

  it('Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(result).toBe('NaN');
  });

  it('Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(result).toBe('NaN');
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: true,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: true
    });

    expect(() => new Calc(10)
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: true
    });

    expect(() => new Calc(10)
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    });

    expect(() => new Calc(10)
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: true,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: true
    });

    expect(() => new Calc(10)
    .divide(0)
    .finish())
    .toThrow(CalcError);
  });

  it('Ignorando exceção para operação que resulta infinito', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
      .divide(0)
      .finish();

    expect(result).toBeGreaterThanOrEqual(Infinity);
  });

  it('Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(result).toBe('NaN');
  });


  it('Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(result).toBe('NaN');
  });
});

describe('Validando configurações com thrownStrategy em "emit-event"', () => {
  it('Configurações em operação que deve quebrar por ocorrência de infinito', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: true,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: true
    })
    .divide(0)
    .finish();
  });

  it('Configurações em operação que deve quebrar por ocorrência de infinito', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: true
    })
    .divide(0)
    .finish();
  });

  it('Configurações em operação que deve quebrar por ocorrência de infinito', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    })
    .divide(0)
    .finish();
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: true,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: true
    })
    .divide(0)
    .finish();
  });

  it('Ignorando exceção para operação que resulta infinito', () => {

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    })
    .divide(0)
    .finish();

    expect(result).toBeGreaterThanOrEqual(Infinity);
  });

  it('Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(result.toString()).toBe('NaN');
  });

  it('Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(result.toString()).toBe('NaN');
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    Calc.configure({
      throwInfinite: true,
      throwNaN: true,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: true
    });

    const result = new Calc(10)
      .divide(0)
      .finish();
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: true
    });

    const result = new Calc(10)
      .divide(0)
      .finish();
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
      .divide(0)
      .finish();
  });

  it('Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {
    Calc.onError(error => expect(error).toBeInstanceOf(CalcError));

    Calc.configure({
      throwInfinite: false,
      throwNaN: true,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: true
    });

    const result = new Calc(10)
    .divide(0)
    .finish();
  });

  it('Ignorando exceção para operação que resulta infinito', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
      .divide(0)
      .finish();

    expect(result).toBeGreaterThanOrEqual(Infinity);
  });

  it('Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(result.toString()).toBe('NaN');
  });


  it('Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(result.toString()).toBe('NaN');
  });
});