import NotionClient from '../../NotionClient'
import {Uuid} from '../ids'
import {RecordMap, mergeRecordMaps} from '../record-map'

export type LoadCachedPageChunkCursorStackItem = {
  id: Uuid
  index: number
  table: 'block'
}

export type LoadCachedPageChunkCursor = {
  stack:
    | []
    | [
        [LoadCachedPageChunkCursorStackItem],
        [LoadCachedPageChunkCursorStackItem]
      ]
}

interface LoadCachedPageChunkIds {
  blockId: Uuid
  spaceId?: Uuid
}

interface LoadCachedPageChunkParameters {
  chunkNumber?: number
  cursor: LoadCachedPageChunkCursor
  limit?: number
  verticalColumns?: boolean
}

export type LoadCachedPageChunkResponseData = {
  cursor: LoadCachedPageChunkCursor
  recordMap: RecordMap
}

export async function loadCachedPageChunk(
  client: NotionClient,
  {blockId}: LoadCachedPageChunkIds,

  {
    chunkNumber = 0,
    cursor = {stack: []},
    limit = 50,
    verticalColumns = false
  }: LoadCachedPageChunkParameters
) {
  return client.post<LoadCachedPageChunkResponseData>('loadCachedPageChunk', {
    chunkNumber,
    cursor,
    limit,
    pageId: blockId,
    verticalColumns
  })
}

export type LoadCachedPageChunksResponse = {
  data?: {recordMap: RecordMap}
  status: number
}

interface LoadCachedPageChunksIds {
  blockId: Uuid
  spaceId?: Uuid
}

interface LoadCachedPageChunksParameters {
  limit?: number
  verticalColumns?: boolean
}

async function* loadCachedPageChunkSequence(
  client: NotionClient,
  {blockId, spaceId}: LoadCachedPageChunksIds,
  parameters: LoadCachedPageChunksParameters = {
    limit: 50,
    verticalColumns: false
  }
) {
  let hasNextChunk = true
  let chunkNumber = 0
  let cursor: LoadCachedPageChunkCursor = {stack: []}

  let requestIds: LoadCachedPageChunkIds = {blockId}
  if (spaceId) {
    requestIds.spaceId = spaceId
  }

  while (hasNextChunk) {
    const json = await loadCachedPageChunk(client, requestIds, {
      chunkNumber,
      cursor,
      ...parameters
    })

    yield json

    if (json?.data?.cursor?.stack?.length > 0) {
      chunkNumber++
      cursor = json.data.cursor

      if (requestIds.spaceId == null) {
        const block = json?.data?.recordMap?.block?.[blockId]
        const blockSpaceId = block?.value?.space_id

        if (blockSpaceId) {
          requestIds.spaceId = blockSpaceId
        }
      }
    } else {
      hasNextChunk = false
    }
  }
}

export async function loadCachedPageChunks(
  client: NotionClient,
  {blockId}: LoadCachedPageChunkIds,
  parameters?: LoadCachedPageChunkParameters
): Promise<LoadCachedPageChunksResponse> {
  let recordMap = {}

  for await (const json of loadCachedPageChunkSequence(
    client,
    {blockId},
    parameters
  )) {
    if (json.status !== 200) {
      return {status: json.status}
    }

    recordMap = mergeRecordMaps(recordMap, json.data.recordMap)
  }

  return {status: 200, data: {recordMap}}
}
