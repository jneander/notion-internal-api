import {Uuid} from '../shared'
import {PropertyKey} from './keys'

type CollectionPointer = {
  id: Uuid
  spaceId: Uuid
  table: 'collection'
}

export type RelationProperty = {
  collection_id: Uuid
  collection_pointer?: CollectionPointer
  name: string
  property: PropertyKey
  type: 'relation'
}

type RelationPropertyValueItem = [
  '‣',
  [['p', Uuid /* pageId */, Uuid? /* spaceId */]]
]

export type RelationPropertyValue = Array<RelationPropertyValueItem | [',']>
