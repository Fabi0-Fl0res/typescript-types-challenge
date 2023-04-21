<!--info-header-start--><h1>Multiply <img src="https://img.shields.io/badge/-extreme-b11b8d" alt="extreme"/> <img src="https://img.shields.io/badge/-%23math-999" alt="#math"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><p><a href="https://tsch.js.org/517/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

**This challenge continues from [476 - Sum](https://tsch.js.org/476), it is recommended that you finish that one first, and modify your code based on it to start this challenge.**

Implement a type `Multiply<A, B>` that multiplies two non-negative integers and returns their product as a string. Numbers can be specified as string, number, or bigint.

For example,

```ts
type T0 = Multiply<2, 3> // '6'
type T1 = Multiply<3, '5'> // '15'
type T2 = Multiply<'4', 10> // '40'
type T3 = Multiply<0, 16> // '0'
type T4 = Multiply<'13', '21'> // '273'
type T5 = Multiply<'43423', 321543n> // '13962361689'
```
