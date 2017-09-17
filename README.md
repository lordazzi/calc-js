# Calc JS
Handle JavaScript operations, avoiding the native problems of the language.

# The problem
An old problem that the area of computing suffers is the problem of representing decimal numbers encoded in IEEE 754 binary format, a problem that JavaScript suffers as well.
The bug consists of the lack of ability for the format to represent some numerical values in the binary format, you can read an article talking about it here:  [Floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Floating-point_numbers).

This is a well-known problem, in Java they have developed a class called BigDecimal to solve this.

[!Error example](docs/problem.png)

# Solution
I developed this library right at the beginning of a project where I worked for a company, involving product sales, as I knew I would have this problem with using [Angular 2](http://angular.io/) (a framework that uses a JavaScript based language) in the design process, I wrote the typescript library using native JavaScript operations, with the shell in TypeScript and covered with unit tests resulting in failure. We used the library without it actually having an internal implementation during software development, when the first bugs related to it began to appear inside the system, I realized that it was time to write the solution in it, which was basically to raise the numbers participants of the echoing for the same base, a basis on which they became integers, and that their result also became whole, following this from the division of the result by the value that the library chose to form the base of the calculation.

I understand that a problem is generated when you perform a simple calculation using some decimal values, as in the example below:
```javascript
0.2 + 0.1 = 0.30000000000000004
```

But for some reason, I don't know if it is because of something specific to JavaScript or the IEEE 754 specification, but the same problem does not occur when the same result is searched using powers of 10, as in the example:
```javascript
3 / 10 = 0.3
```

# How to use
The use of the library is very simple:

```typescript
import { Calc } from 'calc-js';

// 0.2 + 0.1
Calc.sum(0.2, 0.1);

// 0.2 - 0.1
Calc.minus(0.2, 0.1);

// 2199 / 100 * 5
Calc.multiply(Calc.divide(2199, 100), 5);
```

This is an example with TypeScript, but you can also use this in JavaScript application as you wish.

# Instalação
```sh
npm install calc-js
```

# TODOs
- Create option in library to transform NaN in an exception