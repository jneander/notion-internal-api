import {PropertyKey, TextPropertyValue} from '../properties'
import {CollectionSchema} from '../schemas'
import {Role, Uuid} from '../shared'

export type CollectionPageProperty = {
  property: PropertyKey
  visible: boolean
}

export type PropertyVisibility = {
  property: PropertyKey
  visibility: 'show' | 'hide' | 'hide_if_empty'
}

export type CollectionValue = {
  alive: boolean
  copied_from?: Uuid
  description?: TextPropertyValue
  file_ids?: Uuid[]

  format?: {
    collection_page_properties?: CollectionPageProperty[]

    page_section_visibility?: {
      backlinks: 'section_collapsed' | 'section_hide' | 'section_show'
      comments: 'section_collapsed' | 'section_hide' | 'section_show'
    }

    property_visibility?: PropertyVisibility[]
  }

  icon?: string
  id: Uuid
  migrated: boolean
  name?: [[string], ...[string][]]
  parent_id: Uuid
  parent_table: 'block'
  schema: CollectionSchema
  space_id: Uuid
  template_pages?: Uuid[]
  version: number
}

export type Collection = {
  role: Role
  value: CollectionValue
}

export type CollectionMap = {
  [collectionId: string]: Collection
}
