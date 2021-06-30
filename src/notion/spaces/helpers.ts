import {isDefined} from '../../utils'
import {RecordMap, Uuid} from '../shared'
import {getUserRootFromRecordMap} from '../user-roots'
import {Space, SpaceMap} from './types'

export function getSpaceMapFromRecordMap(
  recordMap: RecordMap
): SpaceMap | null {
  return recordMap.space || null
}

export function getSpaceFromRecordMap(
  recordMap: RecordMap,
  spaceId: Uuid
): Space | null {
  return recordMap.space?.[spaceId] || null
}

export function getSpacesFromRecordMap(
  recordMap: RecordMap,
  userId: Uuid
): Space[] {
  const spaceViewPointers =
    getUserRootFromRecordMap(recordMap, userId)?.value?.space_view_pointers ||
    []
  return spaceViewPointers
    .map(({spaceId}) => getSpaceFromRecordMap(recordMap, spaceId))
    .filter(isDefined)
}
