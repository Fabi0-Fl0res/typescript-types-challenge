export type MyCapitalize<T> = T extends `${infer H}${infer T}`
  ? `${Capitalize<H>}${T}`
  : T
