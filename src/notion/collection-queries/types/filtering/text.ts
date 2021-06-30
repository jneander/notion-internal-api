import {PresenceOperator, StringOperator} from './shared'

type TextComparisonFilter = {
  operator: StringOperator
  value: {
    type: 'exact'
    value: string
  }
}

type TextPresenceFilter = {
  operator: PresenceOperator
}

export type TextFilter = TextComparisonFilter | TextPresenceFilter
