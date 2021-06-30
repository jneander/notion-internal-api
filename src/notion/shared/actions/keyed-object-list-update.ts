import NotionClient from '../../NotionClient'
import {Uuid} from '../ids'
import {Operation, OperationPointer, buildTransaction} from '../transactions'
import {saveTransactions} from './save-transactions'

interface KeyedObjectListUpdateIds {
  spaceId: Uuid
}

interface KeyedObjectListUpdateParameters {
  pointer: OperationPointer
  path: string[]
  args: any
}

export function keyedObjectListUpdate(
  client: NotionClient,
  {spaceId}: KeyedObjectListUpdateIds,
  parameters: KeyedObjectListUpdateParameters
) {
  const operations: Operation[] = [
    {
      ...parameters,
      command: 'keyedObjectListUpdate'
    }
  ]

  const transactions = [buildTransaction(operations, spaceId)]

  return saveTransactions(client, {transactions})
}
