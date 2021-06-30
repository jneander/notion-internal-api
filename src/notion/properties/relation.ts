import {Uuid} from '../shared'
import {PropertyKey} from './keys'

export type RelationProperty = {
  collection_id: Uuid
  name: string
  property: PropertyKey
  type: 'relation'
}

type RelationPropertyValueItem = ['‣', [['p', Uuid /* pageId */, Uuid? /* spaceId */]]]

export type RelationPropertyValue = Array<RelationPropertyValueItem | [',']>
