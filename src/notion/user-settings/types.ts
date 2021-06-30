import {Role, Uuid} from '../shared'

export type UserSettingsValue = {
  id: Uuid
  version: number

  settings: {
    hidden_collection_descriptions?: Uuid[]
    locale: string // 'en-US'
    persona: 'personal' // TODO: support other types
    preferred_locale: string // 'en-US'
    preferred_locale_origin: 'legacy' // TODO: support other types
    signup_time: number
    source: 'press_article' // TODO: support other types
    time_zone: string // 'America/Chicago'
    type: 'personal' // TODO: support other types
    used_android_app: boolean
    used_desktop_web_app: boolean
    used_ios_app: boolean
  }
}

export type UserSettings = {
  role: Role
  value: UserSettingsValue
}

export type UserSettingsMap = {
  [userId: string]: UserSettings
}
