import {Uuid, buildId} from '../ids'
import {Operation} from './operations'

export * from './operations'

export type Transaction = {
  id: Uuid
  spaceId: Uuid
  operations: Operation[]
}

export function buildTransaction(
  operations: Operation[],
  spaceId: Uuid
): Transaction {
  return {
    id: buildId(),
    operations,
    spaceId
  }
}
