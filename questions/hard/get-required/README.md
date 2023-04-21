<!--info-header-start--><h1>Get Required <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/> <img src="https://img.shields.io/badge/-%23infer-999" alt="#infer"/></h1><p><a href="https://tsch.js.org/57/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement the advanced util type `GetRequired<T>`, which remains all the required fields

For example

```ts
type I = GetRequired<{ foo: number; bar?: string }> // expected to be { foo: number }
```
