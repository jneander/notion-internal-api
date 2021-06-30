import {BlockMap} from '../blocks'
import {CollectionViewMap} from '../collection-views'
import {CollectionMap} from '../collections'
import {NotionUserMap} from '../notion-users'
import {SpaceViewMap} from '../space-views'
import {SpaceMap} from '../spaces'
import {UserRootMap} from '../user-roots'
import {UserSettingsMap} from '../user-settings'

export type RecordMap = {
  block?: BlockMap
  collection?: CollectionMap
  collection_view?: CollectionViewMap
  notion_user?: NotionUserMap
  space?: SpaceMap
  space_view?: SpaceViewMap
  user_root?: UserRootMap
  user_settings?: UserSettingsMap
}

export function mergeRecordMaps(mapA, mapB) {
  return {
    block: {...mapA.block, ...mapB.block},
    collection: {...mapA.collection, ...mapB.collection},
    collection_view: {...mapA.collection_view, ...mapB.collection_view},
    notion_user: {...mapA.notion_user, ...mapB.notion_user},
    user_root: {...mapA.user_root, ...mapB.user_root},
    user_settings: {...mapA.user_settings, ...mapB.user_settings},
    space: {...mapA.space, ...mapB.space},
    space_view: {...mapA.space_view, ...mapB.space_view}
  }
}
