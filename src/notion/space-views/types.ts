import {Role, Uuid} from '../shared'

export type SpaceViewPointer = {
  id: Uuid
  table: 'space_view'
  spaceId: Uuid
}

export type SpaceViewValue = {
  id: Uuid
  version: number
  space_id: Uuid
  bookmarked_pages?: Uuid[]
  parent_id: Uuid
  parent_table: 'user_root'
  alive: boolean
  notify_mobile: boolean
  notify_desktop: boolean
  notify_email: boolean
  visited_templates?: Uuid[]
  sidebar_hidden_templates?: Uuid[]
  created_getting_started?: boolean
  created_onboarding_templates?: boolean
  joined: boolean
}

export type SpaceView = {
  role: Role
  value: SpaceViewValue
}

export type SpaceViewMap = {
  [spaceViewId: string]: SpaceView
}
