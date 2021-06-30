import {PropertyKey} from './keys'

type BaseRollup = {
  name: string
  type: 'rollup'
  relation_property: PropertyKey
  target_property: PropertyKey
}

/* "Show Original" has undefined aggregation */
type DiscreteValueAggregation =
  | 'show_unique'
  | 'count'
  | 'count_values'
  | 'unique'
  | 'empty'
  | 'not_empty'
  | 'percent_empty'
  | 'percent_not_empty'

type CheckboxRollup = BaseRollup & {
  /* "Show Original" has undefined aggregation */
  aggregation?:
    | 'count'
    | 'checked'
    | 'unchecked'
    | 'percent_checked'
    | 'percent_unchecked'
  target_property_type: 'checkbox'
}

type DateRollup = BaseRollup & {
  aggregation?:
    | DiscreteValueAggregation
    | 'earliest_date'
    | 'latest_date'
    | 'date_range'
  target_property_type: 'date'
}

type EmailRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'email'
}

type FilesAndMediaRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'file'
}

type MultiSelectRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'multi_select'
}

type NumberRollup = BaseRollup & {
  aggregation?:
    | DiscreteValueAggregation
    | 'sum'
    | 'average'
    | 'median'
    | 'min'
    | 'max'
    | 'range'
  target_property_type: 'number'
}

type PersonRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'person'
}

type PhoneRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'phone_number'
}

type RelationRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'relation'
}

type SelectRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'select'
}

type TextRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'text'
}

type TitleRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'title'
}

type UrlRollup = BaseRollup & {
  aggregation?: DiscreteValueAggregation
  target_property_type: 'url'
}

export type RollupProperty =
  | CheckboxRollup
  | DateRollup
  | EmailRollup
  | FilesAndMediaRollup
  | MultiSelectRollup
  | NumberRollup
  | PersonRollup
  | PhoneRollup
  | RelationRollup
  | SelectRollup
  | TextRollup
  | TitleRollup
  | UrlRollup
