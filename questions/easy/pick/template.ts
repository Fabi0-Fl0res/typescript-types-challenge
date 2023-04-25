export type MyPick<T, Properties extends keyof T> = { [P in Properties]: T[P] }
