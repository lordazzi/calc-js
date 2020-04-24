# Calc JS
Handle JavaScript operations, avoiding the native problems of the language.
> javescripeto le calco

[![npm version](https://badge.fury.io/js/calc-js.svg)](https://badge.fury.io/js/calc-js)
[![Npm Total Downloads](https://img.shields.io/npm/dt/calc-js.svg)](https://github.com/lordazzi/calc-js)
[![Npm Monthly Downloads](https://img.shields.io/npm/dm/calc-js.svg)](https://github.com/lordazzi/calc-js)
[![Build Status](https://travis-ci.org/lordazzi/calc-js.svg?branch=master)](https://travis-ci.org/lordazzi/calc-js)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/lordazzi/calc-js/blob/documentation/LICENSE)

## The problem
The problem of representing decimal numbers encoded in IEEE 754 binary format is a problem that JavaScript suffers.
The bug consists of the lack of ability for the format to represent some numerical values in the binary format, you can read an article talking about it here:  [Floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Floating-point_numbers).

This is a well-known problem, in Java they have developed a class called BigDecimal to solve this.

![Error example](docs/problem.png)

![Error example](docs/problem2.png)

I understand that a problem is generated when you perform a simple calculation using some decimal values, as in the example below:
```javascript
0.2 + 0.1 = 0.30000000000000004
```

But for some reason, I don't know if it is because of something specific to JavaScript or the IEEE 754 specification, but the same problem does not occur when the same result is searched using powers of 10, as in the example:
```javascript
3 / 10 = 0.3
```

## How to use
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

## Instalation
```sh
npm install calc-js
```

## Contributing

### 1. Create an issue
No one feature will be implemented without it having an open issue and without which the proposed has been accepted by the team responsible for the project. After the issue is approved, the applicant, a team member or anyone else can open a pull request associated with that issue (just paste the issue link in the pull request).

### 2. Did you find a bug?
When logging a bug, please be sure to include the following:
 * The library version;
 * If at all possible, an *isolated* way to reproduce the behavior;
 * The behavior you expect to see, and the actual behavior.

You can try to update the library to the last version to see if the bug has already been fixed.

### 3. Do not create a duplicate issue
[Search the existing issues](https://github.com/lordazzi/calc-js/search?type=Issues) before logging a new one.

Some search tips:
 * *Don't* restrict your search to only open issues. An issue with a title similar to yours may have been closed as a duplicate of one with a less-findable title.
 * Check for synonyms. For example, if your bug involves an interface, it likely also occurs with type aliases or classes.

### 4. Create a Pull Request
Follow the steps:

 * Create a [fork](https://guides.github.com/activities/forking/) from our repository, install [node](https://nodejs.org/), and run `npm install` in the application folder;
 * Create a branch in your forked repository, then code the feature or fix the bug;
 * Run `npm run lint`, `npm run test` and `npm run build` in the repository;
 * Create a Pull Request from your repository to this one, with the issue in the body and some information you think could be usefull to the reviewer (print or a [gif of it working](https://www.screentogif.com/) will be appreciated);
 * The reviewer can ask some changes, don't be mad, this is the GIT Flow process;
 * You get approved and your branch with the feature / fix 