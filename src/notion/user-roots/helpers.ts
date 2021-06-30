import {RecordMap, Uuid} from '../shared'
import {UserRoot} from './shared'

export function getUserRootFromRecordMap(
  recordMap: RecordMap,
  userId: Uuid
): UserRoot | null {
  return recordMap?.user_root?.[userId] || null
}
