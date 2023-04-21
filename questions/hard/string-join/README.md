<!--info-header-start--><h1>String Join <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> </h1><p><a href="https://tsch.js.org/847/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Create a type-safe string join utility which can be used like so:

```ts
const hyphenJoiner = join('-')
const result = hyphenJoiner('a', 'b', 'c') // = 'a-b-c'
```

Or alternatively:

```ts
join('#')('a', 'b', 'c') // = 'a#b#c'
```

When we pass an empty delimiter (i.e '') to join, we should concat the strings as they are, i.e:

```ts
join('')('a', 'b', 'c') // = 'abc'
```

When only one item is passed, we should get back the original item (without any delimiter added):

```ts
join('-')('a') // = 'a'
```
