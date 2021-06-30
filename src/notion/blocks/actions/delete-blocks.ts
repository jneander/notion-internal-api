import NotionClient from '../../NotionClient'
import {RecordMap, Uuid} from '../../shared'

interface DeleteBlockIds {
  blockIds: Uuid[]
}

interface DeleteBlockResponseData {
  recordMap: RecordMap
}

export function deleteBlocks(client: NotionClient, {blockIds}: DeleteBlockIds) {
  return client.post<DeleteBlockResponseData>('deleteBlocks', {blockIds})
}
