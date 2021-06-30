import NotionClient from '../../NotionClient'
import {Uuid} from '../ids'
import {RecordMap} from '../record-map'

export type SyncRecordValuesRequest = {
  pointer: {
    table:
      | 'block'
      | 'collection'
      | 'collection_view'
      | 'follow'
      | 'notion_user'
      | 'space'
      | 'space_view'
      | 'user_root'
      | 'user_settings'
    id: Uuid
  }
  version?: number
}

interface SyncRecordValuesParameters {
  requests: SyncRecordValuesRequest[]
}

export interface SyncRecordValuesResponseData {
  recordMap: RecordMap
}

export function syncRecordValues(
  client: NotionClient,
  {requests}: SyncRecordValuesParameters
) {
  const body = {
    requests: requests.map(request => ({version: -1, ...request}))
  }

  return client.post<SyncRecordValuesResponseData>('syncRecordValues', body)
}
