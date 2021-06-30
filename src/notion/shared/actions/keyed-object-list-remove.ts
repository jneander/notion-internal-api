import NotionClient from '../../NotionClient'
import {Uuid} from '../ids'
import {Operation, OperationPointer, buildTransaction} from '../transactions'
import {saveTransactions} from './save-transactions'

interface KeyedObjectListRemoveIds {
  spaceId: Uuid
}

interface KeyedObjectListRemoveParameters {
  pointer: OperationPointer
  path: string[]
  args: any
}

export function keyedObjectListRemove(
  client: NotionClient,
  {spaceId}: KeyedObjectListRemoveIds,
  parameters: KeyedObjectListRemoveParameters
) {
  const operations: Operation[] = [
    {
      ...parameters,
      command: 'keyedObjectListRemove'
    }
  ]

  const transactions = [buildTransaction(operations, spaceId)]

  return saveTransactions(client, {transactions})
}
