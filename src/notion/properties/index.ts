import {CheckboxPropertyValue} from './checkbox'
import {DatePropertyValue} from './dates'
import {EmailPropertyValue} from './email'
import {FilesAndMediaPropertyValue} from './files-and-media'
import {MultiSelectPropertyValue} from './multi-select'
import {NumberPropertyValue} from './number'
import {PersonPropertyValue} from './person'
import {PhonePropertyValue} from './phone'
import {RelationPropertyValue} from './relation'
import {TextPropertyValue} from './text'
import {TitlePropertyValue} from './title'
import {UrlPropertyValue} from './url'

export * from './checkbox'
export * from './dates'
export * from './email'
export * from './files-and-media'
export * from './formula'
export * from './keys'
export * from './metadata'
export * from './multi-select'
export * from './number'
export * from './person'
export * from './phone'
export * from './relation'
export * from './rollup'
export * from './select'
export * from './text'
export * from './title'
export * from './types'
export * from './url'

export type PageProperties = {
  title?: TitlePropertyValue
  [propertyKey: string]:
    | undefined
    | CheckboxPropertyValue
    | DatePropertyValue
    | EmailPropertyValue
    | FilesAndMediaPropertyValue
    | MultiSelectPropertyValue
    | NumberPropertyValue
    | PersonPropertyValue
    | PhonePropertyValue
    | RelationPropertyValue
    | TextPropertyValue
    | UrlPropertyValue
}

export type PropertyValue =
  | TitlePropertyValue
  | CheckboxPropertyValue
  | DatePropertyValue
  | EmailPropertyValue
  | FilesAndMediaPropertyValue
  | MultiSelectPropertyValue
  | NumberPropertyValue
  | PersonPropertyValue
  | PhonePropertyValue
  | RelationPropertyValue
  | TextPropertyValue
  | UrlPropertyValue
