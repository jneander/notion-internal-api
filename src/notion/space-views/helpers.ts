import {isDefined} from '../../utils'
import {RecordMap, Uuid} from '../shared'
import {SpaceView} from './types'

export function findSpaceViewInRecordMap(
  recordMap: RecordMap,
  filterFn: (spaceView: SpaceView) => boolean
): SpaceView | null {
  return Object.values(recordMap?.space_view || {}).find(filterFn)
}

export function getSpaceViewFromRecordMap(
  recordMap: RecordMap,
  spaceViewId: Uuid
): SpaceView | null {
  return recordMap?.space_view?.[spaceViewId] || null
}

export function getSpaceViewsFromRecordMap(
  recordMap: RecordMap,
  userId: Uuid
): SpaceView[] {
  const userRoot = recordMap?.user_root?.[userId]
  if (!userRoot?.value?.space_views) {
    return []
  }

  return userRoot.value.space_views
    .map(spaceViewId => getSpaceViewFromRecordMap(recordMap, spaceViewId))
    .filter(isDefined)
}
