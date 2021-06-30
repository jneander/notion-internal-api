import NotionClient from '../../NotionClient'
import {Backlink} from '../../backlinks'
import {Uuid} from '../ids'
import {RecordMap} from '../record-map'

interface GetBacklinksForBlockIds {
  blockId: Uuid
}

type GetBacklinksForBlockResponseData = {
  backlinks: Backlink[]
  recordMap: RecordMap
}

export async function getBacklinksForBlock(
  client: NotionClient,
  {blockId}: GetBacklinksForBlockIds
) {
  return client.post<GetBacklinksForBlockResponseData>('getBacklinksForBlock', {
    blockId
  })
}
