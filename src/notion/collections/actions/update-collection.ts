import NotionClient from '../../NotionClient'
import {
  Operation,
  OperationCommand,
  Uuid,
  buildTransaction,
  saveTransactions
} from '../../shared'

interface UpdateCollectionIds {
  collectionId: Uuid
  spaceId: Uuid
}

interface UpdateCollectionParameters {
  command: OperationCommand
  path: string[]
  args: any
}

export function updateCollection(
  client: NotionClient,
  {collectionId, spaceId}: UpdateCollectionIds,
  {command, path, args}: UpdateCollectionParameters
) {
  const operations: Operation[] = [
    {
      pointer: {
        id: collectionId,
        table: 'collection',
        spaceId
      },

      command,
      path,
      args
    }
  ]

  const transactions = [buildTransaction(operations, spaceId)]

  return saveTransactions(client, {transactions})
}
