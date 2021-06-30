import {
  DatePropertyDatum,
  DateTimePropertyDatum,
  DateTimeRangePropertyDatum
} from '../../properties'

type BaseAggregator =
  | 'count'
  | 'count_values'
  | 'empty'
  | 'not_empty'
  | 'percent_empty'
  | 'percent_not_empty'
  | 'unique'

type DateAggregator =
  | BaseAggregator
  | 'earliest_date'
  | 'latest_date'
  | 'date_range'

type NumberAggregator =
  | BaseAggregator
  | 'sum'
  | 'average'
  | 'median'
  | 'min'
  | 'max'
  | 'range'

type CheckboxAggregator =
  | 'count'
  | 'checked'
  | 'unchecked'
  | 'percent_checked'
  | 'percent_unchecked'

type Aggregator =
  | BaseAggregator
  | DateAggregator
  | NumberAggregator
  | CheckboxAggregator

export type Aggregation = {
  aggregator: Aggregator
  property: PropertyKey
}

type NumberAggregationResult = {
  type: 'number'
  value?: number
}

type DateAggregationResult = {
  type: 'date'
  value?: DatePropertyDatum | DateTimePropertyDatum | DateTimeRangePropertyDatum
}

export type AggregationResult = NumberAggregationResult | DateAggregationResult
