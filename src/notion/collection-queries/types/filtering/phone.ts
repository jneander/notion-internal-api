import {PresenceOperator, StringOperator} from './shared'

type PhoneComparisonFilter = {
  operator: StringOperator
  value: {
    type: 'exact'
    value: string
  }
}

type PhonePresenceFilter = {
  operator: PresenceOperator
}

export type PhoneFilter = PhoneComparisonFilter | PhonePresenceFilter
