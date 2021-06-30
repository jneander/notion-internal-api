import {RecordMap, Role, Uuid} from '../shared'
import {SpaceViewPointer} from '../space-views'

export type UserRootValue = {
  id: Uuid
  version: 11
  space_views: Uuid[]
  space_view_pointers: SpaceViewPointer[]
}

export type UserRoot = {
  role: Role
  value: UserRootValue
}

export type UserRootMap = {
  [userId: string]: UserRoot
}
