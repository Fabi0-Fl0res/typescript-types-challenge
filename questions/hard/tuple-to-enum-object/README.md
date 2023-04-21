<!--info-header-start--><h1>Tuple to Enum Object <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><p><a href="https://tsch.js.org/472/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a>

The enum is an original syntax of TypeScript (it does not exist in JavaScript). So it is converted to like the following form as a result of transpilation:

```js
let OperatingSystem
;(function (OperatingSystem) {
  OperatingSystem[(OperatingSystem['MacOS'] = 0)] = 'MacOS'
  OperatingSystem[(OperatingSystem['Windows'] = 1)] = 'Windows'
  OperatingSystem[(OperatingSystem['Linux'] = 2)] = 'Linux'
})(OperatingSystem || (OperatingSystem = {}))
```

In this question, the type should convert a given string tuple to an object that behaves like an enum.
Moreover, the property of an enum is preferably a pascal case.

```ts
Enum<["macOS", "Windows", "Linux"]>
// -> { readonly MacOS: "macOS", readonly Windows: "Windows", readonly Linux: "Linux" }
```

If `true` is given in the second argument, the value should be a number literal.

```ts
Enum<["macOS", "Windows", "Linux"], true>
// -> { readonly MacOS: 0, readonly Windows: 1, readonly Linux: 2 }
```
