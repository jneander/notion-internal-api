import NotionClient from '../../NotionClient'
import {
  Operation,
  OperationCommand,
  Uuid,
  buildTransaction,
  saveTransactions
} from '../../shared'

interface UpdateBlockIds {
  blockId: Uuid
  spaceId: Uuid
}

interface UpdateBlockParameters {
  command: OperationCommand
  path: string[]
  args: any
}

export function updateBlock(
  client: NotionClient,
  {blockId, spaceId}: UpdateBlockIds,
  {command, path, args}: UpdateBlockParameters
) {
  const operations: Operation[] = [
    {
      pointer: {
        id: blockId,
        table: 'block',
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
