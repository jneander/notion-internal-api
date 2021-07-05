import {PropertyKey} from '../properties'
import {Pointer, Uuid} from '../shared'

type BacklinkCollectionReference = {
  type: 'collection_reference'
  pointer: Pointer
  block_id: Uuid
}

type BacklinkPropertyMention = {
  type: 'property_mention'
  pointer: Pointer
  property_id: PropertyKey
}

export type Backlink = {
  block_id: Uuid
  mentioned_from: BacklinkCollectionReference | BacklinkPropertyMention
}
