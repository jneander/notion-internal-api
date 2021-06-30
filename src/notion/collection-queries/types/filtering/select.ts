import {PresenceOperator} from './shared'

type SelectOperator = 'enum_contains' | 'enum_does_not_contain'

type SelectComparisonFilter = {
  operator: SelectOperator
  value: {
    type: 'exact'
    value: string
  }
}

type SelectPresenceFilter = {
  operator: PresenceOperator
}

export type SelectFilter = SelectComparisonFilter | SelectPresenceFilter
