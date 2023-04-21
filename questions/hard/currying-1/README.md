<!--info-header-start--><h1>Currying 1 <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><p><a href="https://tsch.js.org/17/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

> TypeScript 4.0 is recommended in this challenge

[Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

For example:

```ts
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
```

The function passed to `Currying` may have multiple arguments, you need to correctly type it.

In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
