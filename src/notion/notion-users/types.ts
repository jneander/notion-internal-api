import {Role, Uuid} from '../shared'

export type NotionUserValue = {
  id: Uuid
  version: number
  email: string
  given_name: string
  family_name: string
  profile_photo: string

  onboarding_completed: boolean
  mobile_onboarding_completed: boolean
  clipper_onboarding_completed: boolean
}

export type NotionUser = {
  role: Role
  value: NotionUserValue
}

export type NotionUserMap = {
  [userId: string]: NotionUser
}
