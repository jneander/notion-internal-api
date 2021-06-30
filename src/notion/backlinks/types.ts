import {Uuid} from '../shared'

export type Backlink = {
  block_id: Uuid
  mentioned_from: {
    type: 'collection_reference'
    block_id: Uuid
  }
}
