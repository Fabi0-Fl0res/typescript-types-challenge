export type Chainable<obj extends { [P: string]: unknown } = {}> = {
  option<K extends string, V>(
    key: K,
    value: V,
  ): Chainable<{ [key in keyof obj | K]: key extends keyof obj ? obj[key] : V }>
  get(): obj
}
