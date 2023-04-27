export type Diff<O, O1> = {
  [P in Exclude<keyof (O & O1), keyof (O | O1)>]: (O & O1)[P]
}
