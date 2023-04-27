export type LengthOfString<
  S extends string,
  C extends string[] = []
> = S extends `${infer H}${infer K}`
  ? LengthOfString<K, [H, ...C]>
  : C['length']
