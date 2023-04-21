<!--info-header-start--><h1>Get Optional <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><p><a href="https://tsch.js.org/59/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement the advanced util type `GetOptional<T>`, which remains all the optional fields

For example

```ts
type I = GetOptional<{ foo: number; bar?: string }> // expected to be { bar?: string }
```
