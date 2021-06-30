import {
  CheckboxProperty,
  CreatedByProperty,
  CreatedTimeProperty,
  DateProperty,
  EmailProperty,
  FilesAndMediaProperty,
  FormulaProperty,
  LastEditedByProperty,
  LastEditedTimeProperty,
  MultiSelectProperty,
  NumberProperty,
  PersonProperty,
  PhoneProperty,
  RelationProperty,
  RollupProperty,
  SelectProperty,
  TextProperty,
  TitleProperty,
  UrlProperty
} from '../properties'

export type SchemaProperty =
  | CheckboxProperty
  | CreatedByProperty
  | CreatedTimeProperty
  | DateProperty
  | EmailProperty
  | FilesAndMediaProperty
  | FormulaProperty
  | LastEditedByProperty
  | LastEditedTimeProperty
  | MultiSelectProperty
  | NumberProperty
  | PersonProperty
  | RelationProperty
  | RollupProperty
  | PhoneProperty
  | SelectProperty
  | TextProperty
  | TitleProperty
  | UrlProperty

export type CollectionSchema = {
  title: TitleProperty
  [propertyKey: string]: SchemaProperty | undefined
}
