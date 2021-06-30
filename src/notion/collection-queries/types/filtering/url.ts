import {PresenceOperator, StringOperator} from './shared'

type UrlComparisonFilter = {
  operator: StringOperator
  value: {
    type: 'exact'
    value: string
  }
}

type UrlPresenceFilter = {
  operator: PresenceOperator
}

export type UrlFilter = UrlComparisonFilter | UrlPresenceFilter
