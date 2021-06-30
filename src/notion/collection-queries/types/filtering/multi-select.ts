import {PresenceOperator} from './shared'

type MultiSelectOperator = 'enum_contains' | 'enum_does_not_contain'

type MultiSelectComparisonFilter = {
  operator: MultiSelectOperator
  value: {
    type: 'exact'
    value: string
  }
}

type MultiSelectPresenceFilter = {
  operator: PresenceOperator
}

export type MultiSelectFilter =
  | MultiSelectComparisonFilter
  | MultiSelectPresenceFilter
