import {PropertyKey} from '../../../properties'
import {CheckboxFilter} from './checkbox'
import {DateFilter} from './date'
import {EmailFilter} from './email'
import {FilesAndMediaFilter} from './files-and-media'
import {MultiSelectFilter} from './multi-select'
import {NumberFilter} from './number'
import {PersonFilter} from './person'
import {PhoneFilter} from './phone'
import {SelectFilter} from './select'
import {TextFilter} from './text'
import {TitleFilter} from './title'
import {UrlFilter} from './url'

export type PropertyFilterGroup = {
  operator: 'and' | 'or'
  filters: Array<PropertyFilter | PropertyFilterGroup>
}

export type PropertyFilter = {
  property: PropertyKey
  filter:
    | DateFilter
    | CheckboxFilter
    | EmailFilter
    | FilesAndMediaFilter
    | MultiSelectFilter
    | NumberFilter
    | PersonFilter
    | PhoneFilter
    | SelectFilter
    | TextFilter
    | TitleFilter
    | UrlFilter
}
