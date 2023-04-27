export type Last<T extends any[]> = T extends [...infer _, infer TAIL]
  ? TAIL
  : never
