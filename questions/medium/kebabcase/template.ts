interface capitalizeChars {
  A: 'a'
  B: 'b'
  C: 'c'
  F: 'f'
}

export type KebabCase<S> = S extends `${infer H}${infer K}`
  ? K extends Uncapitalize<K>
    ? `${Uncapitalize<H>}${KebabCase<K>}`
    : `${Uncapitalize<H>}-${KebabCase<K>}`
  : S
