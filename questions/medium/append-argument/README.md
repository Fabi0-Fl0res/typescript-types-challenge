<!--info-header-start--><h1>Append Argument <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23arguments-999" alt="#arguments"/></h1><p><a href="https://tsch.js.org/191/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

For given function type `Fn`, and any type `A` (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take `Fn` as the first argument, `A` as the second, and will produce function type `G` which will be the same as `Fn` but with appended argument `A` as a last one.

For example,

```typescript
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number
```

> This question is ported from the [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-4-495c) by [@maciejsikora](https://github.com/maciejsikora)
