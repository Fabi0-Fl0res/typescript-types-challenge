export type KebabCase<S> = S extends `${infer H}${infer K}`
  ? K extends Uncapitalize<K>
    ? `${Uncapitalize<H>}${KebabCase<K>}`
    : `${Uncapitalize<H>}-${KebabCase<K>}`
  : S
