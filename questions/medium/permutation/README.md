<!--info-header-start--><h1>Permutation <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23union-999" alt="#union"/></h1><p><a href="https://tsch.js.org/296/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

Implement permutation type that transforms union types into the array that includes permutations of unions.

```typescript
type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']
```
