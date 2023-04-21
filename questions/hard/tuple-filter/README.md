<!--info-header-start--><h1>Tuple Filter <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><p><a href="https://tsch.js.org/399/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement a type `FilterOut<T, F>` that filters out items of the given type `F` from the tuple `T`.

For example,

```ts
type Filtered = FilterOut<[1, 2, null, 3], null> // [1, 2, 3]
```
