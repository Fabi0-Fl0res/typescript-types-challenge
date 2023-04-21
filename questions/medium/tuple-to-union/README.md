<!--info-header-start--><h1>Tuple to Union <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></h1><p><a href="https://tsch.js.org/10/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.

For example

```ts
type Arr = ['1', '2', '3']

const a: TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```
