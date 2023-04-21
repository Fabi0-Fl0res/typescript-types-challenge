<!--info-header-start--><h1>DeepPick <img src="https://img.shields.io/badge/-hard-de3d37" alt="hard"/> <img src="https://img.shields.io/badge/-%23deep-999" alt="#deep"/></h1><p><a href="https://tsch.js.org/956/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement a type DeepPick, that extends Utility types `Pick`.
A type takes two arguments.

For example:

```

type obj = {
  name: 'hoge',
  age: 20,
  friend: {
    name: 'fuga',
    age: 30,
    family: {
      name: 'baz',
      age: 1
    }
  }
}

type T1 = DeepPick<obj, 'name'>   // { name : 'hoge' }
type T2 = DeepPick<obj, 'name' | 'friend.name'>  // { name : 'hoge' } & { friend: { name: 'fuga' }}
type T3 = DeepPick<obj, 'name' | 'friend.name' |  'friend.family.name'>  // { name : 'hoge' } &  { friend: { name: 'fuga' }} & { friend: { family: { name: 'baz' }}}

```
