import {PresenceOperator} from './shared'

type NumberOperator =
  | 'number_equals'
  | 'number_does_not_equal'
  | 'number_greater_than'
  | 'number_less_than'
  | 'number_greater_than_or_equal_to'
  | 'number_less_than_or_equal_to'

type NumberComparisonFilter = {
  operator: NumberOperator
  value: {
    type: 'exact'
    value: number
  }
}

type NumberPresenceFilter = {
  operator: PresenceOperator
}

export type NumberFilter = NumberComparisonFilter | NumberPresenceFilter
