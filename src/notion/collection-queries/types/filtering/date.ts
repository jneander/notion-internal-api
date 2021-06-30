import {DatePropertyDatum} from '../../../properties'
import {PresenceOperator} from './shared'

type DateOperator =
  | 'date_is'
  | 'date_is_before'
  | 'date_is_after'
  | 'date_is_on_or_before'
  | 'date_is_on_or_after'

type DateOperatorRelativeValue =
  | 'today'
  | 'tomorrow'
  | 'yesterday'
  | 'one_week_ago'
  | 'one_week_from_now'
  | 'one_month_ago'
  | 'one_month_from_now'

type DateRangeOperatorRelativeValue =
  | 'the_past_week'
  | 'the_past_month'
  | 'the_past_year'
  | 'the_next_week'
  | 'the_next_month'
  | 'the_next_year'

type DateFilterRelativeValue = {
  type: 'relative'
  value: DateOperatorRelativeValue
}

type DateFilterExactValue = {
  type: 'exact'
  value: DatePropertyDatum
}

type DateExactFilter = {
  operator: DateOperator
  value: DateFilterRelativeValue | DateFilterExactValue
}

type DateRangeFilter = {
  operator: 'date_is_within'
  value: {
    type: 'relative'
    value: DateRangeOperatorRelativeValue
  }
}

type DatePresenceFilter = {
  operator: PresenceOperator
}

export type DateFilter = DateExactFilter | DateRangeFilter | DatePresenceFilter
