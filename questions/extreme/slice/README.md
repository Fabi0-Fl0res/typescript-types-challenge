<!--info-header-start--><h1>Slice <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/></h1><p><a href="https://tsch.js.org/216/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement the JavaScript `Array.slice` function in the type system. `Slice<Arr, Start, End>` takes the tree argument. The output should be a subarray of `Arr` from index `Start` to `End`. Indexes with negative numbers should be counted from reversely.

For example

```ts
type Arr = [1, 2, 3, 4, 5]
type Result = Slice<Arr, 2, 4> // expected to be [3, 4]
```
