import {PresenceOperator, StringOperator} from './shared'

type TitleComparisonFilter = {
  operator: StringOperator
  value: {
    type: 'exact'
    value: string
  }
}

type TitlePresenceFilter = {
  operator: PresenceOperator
}

export type TitleFilter = TitleComparisonFilter | TitlePresenceFilter
