export type DeepReadonly<Type> = {
  readonly [K in keyof Type]: Type[K] extends { [K in any]: unknown }
    ? DeepReadonly<Type[K]>
    : Type[K]
}
