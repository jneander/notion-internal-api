import {PresenceOperator, StringOperator} from './shared'

type EmailComparisonFilter = {
  operator: StringOperator
  value: {
    type: 'exact'
    value: string
  }
}

type EmailPresenceFilter = {
  operator: PresenceOperator
}

export type EmailFilter = EmailComparisonFilter | EmailPresenceFilter
