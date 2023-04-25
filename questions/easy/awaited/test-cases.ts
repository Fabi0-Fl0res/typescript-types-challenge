import { Awaited } from './template'

interface Person {
  name: string
  lastName: string
}
type Z = Promise<Person>
type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]
