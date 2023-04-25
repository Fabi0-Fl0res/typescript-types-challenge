export type Includes<T extends readonly any[], U> = T extends [
  infer FIRST_ELEMENT,
  ...infer REST_ELEMENT
]
  ? Equal<FIRST_ELEMENT, U> extends true
    ? true
    : Includes<REST_ELEMENT, U>
  : false
