import {Uuid} from './ids'

export type Role = 'editor' | 'read_and_write'

export type BotPermission = {
  role: Role
  type: 'bot_permission'
  bot_id: Uuid
}

export type SpacePermission = {
  role: Role
  type: 'space_permission'
}

export type UserPermission = {
  role: Role
  type: 'user_permission'
  user_id: Uuid
}

export type Permission = BotPermission | SpacePermission | UserPermission
