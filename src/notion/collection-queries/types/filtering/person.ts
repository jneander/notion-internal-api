import {Uuid} from '../../../shared'
import {PresenceOperator} from './shared'

type PersonOperator =
  | 'person_contains'
  | 'person_does_not_contain'
  | PresenceOperator

type PersonFilterRelativeValue = {
  type: 'relative'
  value: 'me'
}

type PersonFilterExactValue = {
  type: 'exact'
  value: {
    table: 'notion_user'
    id: Uuid
  }
}

type PersonComparisonFilter = {
  operator: PersonOperator
  value: PersonFilterExactValue | PersonFilterRelativeValue
}

type PersonPresenceFilter = {
  operator: PresenceOperator
}

export type PersonFilter = PersonComparisonFilter | PersonPresenceFilter
