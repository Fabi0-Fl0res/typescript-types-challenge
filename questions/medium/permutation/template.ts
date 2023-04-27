export type Permutation<T, C = T> = [T] extends [never]
  ? []
  : T extends T
  ? [T, ...Permutation<Exclude<C, T>>]
  : never
