import {
  CreatedById,
  CreatedByTable,
  CreatedTime,
  LastEditedById,
  LastEditedByTable,
  LastEditedTime
} from '../properties'
import {Permission, Role, Uuid} from '../shared'

export type SpaceValue = {
  id: Uuid
  version: number
  name: string
  permissions: Permission[]
  icon: string
  beta_enabled: boolean
  pages: Uuid[]
  created_time: CreatedTime
  last_edited_time: LastEditedTime
  created_by_table: CreatedByTable
  created_by_id: CreatedById
  last_edited_by_table: LastEditedByTable
  last_edited_by_id: LastEditedById
  plan_type: 'personal' | 'team'
  invite_link_enabled: boolean
}

export type Space = {
  role: Role
  value: SpaceValue
}

export type SpaceMap = {
  [spaceId: string]: Space
}
