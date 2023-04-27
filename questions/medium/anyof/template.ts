export type AnyOf<T extends readonly any[]> = T extends [infer P, ...infer K]
  ? P extends 0 | '' | false | [] | { [P in any]: never }
    ? AnyOf<K>
    : true
  : false
