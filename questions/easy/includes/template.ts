export type Includes<T extends unknown[], K> = T extends [infer P, ...infer X]
  ? P extends K
    ? true
    : Includes<X, K>
  : false
