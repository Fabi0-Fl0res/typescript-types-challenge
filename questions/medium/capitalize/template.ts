interface capitalizeChars {
  f: 'F'
}
export type MyCapitalize<S extends string> = S extends `${infer K}${infer T}`
  ? `${K extends keyof capitalizeChars ? capitalizeChars[K] : K}${T}`
  : S
