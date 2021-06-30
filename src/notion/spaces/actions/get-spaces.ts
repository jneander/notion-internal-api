import type NotionClient from '../../NotionClient'
import type {RecordMap} from '../../shared'

export type GetSpacesResponseData = {
  [userId: string]: RecordMap
}

export function getSpaces(client: NotionClient) {
  return client.post<GetSpacesResponseData>('getSpaces')
}
