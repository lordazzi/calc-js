/* eslint-disable */
import { Calc, CalcError } from '.';
import { ConfigService } from './config/config.service';

describe('[1] Validando configurações com thrownStrategy em "thrown"', () => {
  it('[1] Configurações em operação que deve quebrar por ocorrência de infinito', () => {

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

  it('[2] Configurações em operação que deve quebrar por ocorrência de infinito', () => {

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

  it('[3] Configurações em operação que deve quebrar por ocorrência de infinito', () => {

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

  it('[4] Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {

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

  it('[5] Ignorando exceção para operação que resulta infinito', () => {

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

  it('[6] Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });

  it('[7] Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });

  it('[8] Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {

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

  it('[9] Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {

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

  it('[10] Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {

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

  it('[11] Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {

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

  it('[12] Ignorando exceção para operação que resulta infinito', () => {

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

  it('[13] Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });

  it('[14] Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'thrown',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });
});

describe('[2] Validando configurações com thrownStrategy em "emit-event"', () => {
  it('[1] Configurações em operação que deve quebrar por ocorrência de infinito', () => {
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

  it('[2] Configurações em operação que deve quebrar por ocorrência de infinito', () => {
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

  it('[3] Configurações em operação que deve quebrar por ocorrência de infinito', () => {
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

  it('[4] Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {
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

  it('[5] Ignorando exceção para operação que resulta infinito', () => {

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

  it('[6] Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });

  it('[7] Ignorando exceção para operação que resulta NaN', () => {

    const result = new Calc(10, {
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    })
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });

  it('[8] Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {
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

  it('[9] Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {
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

  it('[10] Configurações global deve fazer equação quebrar por ocorrência de infinito', () => {
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

  it('[11] Configurações global deve fazer equação quebrar por ocorrência de unsafe number', () => {
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

  it('[12] Ignorando exceção para operação que resulta infinito', () => {

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

  it('[13] Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: false,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });

  it('[14] Ignorando exceção para operação que resulta NaN', () => {

    Calc.configure({
      throwInfinite: true,
      throwNaN: false,
      thrownStrategy: 'emit-event',
      throwUnsafeNumber: false
    });

    const result = new Calc(10)
    .divide(NaN)
    .finish();

    expect(String(result)).toBe('NaN');
  });
});
