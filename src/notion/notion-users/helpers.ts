import {RecordMap, Uuid} from '../shared'
import {NotionUser} from './types'

export function getNotionUserFromRecordMap(
  recordMap: RecordMap,
  userId: Uuid
): NotionUser | null {
  return recordMap?.notion_user?.[userId] || null
}
