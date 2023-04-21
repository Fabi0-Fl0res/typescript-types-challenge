<!--info-header-start--><h1>Required Keys <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23utils-999" alt="#utils"/></h1><p><a href="https://tsch.js.org/89/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.

For example

```ts
type Result = RequiredKeys<{ foo: number; bar?: string }>
// expected to be “foo”
```
