import {
  CreatedById,
  CreatedByTable,
  CreatedTime,
  LastEditedById,
  LastEditedByTable,
  LastEditedTime
} from '../properties'
import {Uuid} from './ids'
import {Role} from './permissions'

export type BaseBlockValue = {
  alive: boolean
  copied_from?: Uuid
  created_by?: CreatedById
  created_by_id: CreatedById
  created_by_table: CreatedByTable
  created_time: CreatedTime
  id: Uuid
  last_edited_by?: LastEditedById
  last_edited_by_id: LastEditedById
  last_edited_by_table: LastEditedByTable
  last_edited_time: LastEditedTime
  parent_id: Uuid
  parent_table: 'block' | 'collection' | 'space'
  space_id: Uuid
  version: number
}

export type BaseBlock = {
  role: Role
  value: BaseBlockValue
}
