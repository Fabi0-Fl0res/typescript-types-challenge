export type CapitalizeWords<
  S extends string
> = S extends `${infer T}_${infer U}`
  ? T extends Uncapitalize<T>
    ? `${Capitalize<T>}${Capitalize<CapitalizeWords<U>>}`
    : `${T}${Capitalize<CapitalizeWords<U>>}`
  : S extends `${infer T} ${infer U}`
  ? `${Capitalize<T>} ${Capitalize<CapitalizeWords<U>>}`
  : S extends `${infer T}.${infer U}`
  ? `${Capitalize<T>}.${Capitalize<CapitalizeWords<U>>}`
  : S extends `${infer T},${infer U}`
  ? `${Capitalize<T>},${Capitalize<CapitalizeWords<U>>}`
  : S extends `${infer T}${infer U}`
  ? `${Capitalize<T>}${U}`
  : S
