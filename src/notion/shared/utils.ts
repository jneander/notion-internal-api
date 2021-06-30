import {Uuid} from './ids'

export type Pointer = {
  id: Uuid
  table: 'block' | 'collection'
  spaceId: Uuid
}
