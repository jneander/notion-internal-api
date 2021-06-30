import {RecordMap, Uuid} from '../shared'
import {CollectionView} from './types'

export function getCollectionViewFromRecordMap(
  recordMap: RecordMap,
  collectionViewId: Uuid
): CollectionView | null {
  return recordMap.collection_view?.[collectionViewId] || null
}
