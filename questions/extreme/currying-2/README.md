<!--info-header-start--><h1>Currying 2 <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> </h1><p><a href="https://tsch.js.org/462/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> &nbsp;&nbsp;&nbsp;<a href="./README.zh-CN.md" target="_blank"><img src="https://img.shields.io/badge/-%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-gray" alt="简体中文"/></a> </p><!--info-header-end-->

[Currying](https://en.wikipedia.org/wiki/Currying) is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

But in our daily life, currying dynamic arguments is also commonly used, for example, the `Function.bind(this, [...params])` API.

```ts
const func = (a: number, b: number, c: number) => {
  return a + b + c
}

const bindFunc = func(null, 1, 2)

const result = bindFunc(3) // result: 6
```

Thus, based on `Currying 1`, we would need to have the dynamic argument version:

```ts
const add = (a: number, b: number, c: number) => a + b + c
const three = add(1, 1, 1)

const curriedAdd = DynamicParamsCurrying(add)
const six = curriedAdd(1, 2, 3)
const seven = curriedAdd(1, 2)(4)
const eight = curriedAdd(2)(3)(4)
```

In this challenge, `DynamicParamsCurrying` may take a function with zero to multiple arguments, you need to correctly type it. The returned function may accept at least one argument. When all the arguments as satisfied, it should yield the return type of the original function correctly.
