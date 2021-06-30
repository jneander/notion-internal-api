import {
  CreatedById,
  CreatedTime,
  LastEditedById,
  LastEditedTime,
  PropertyKey,
  PropertyType,
  PropertyValue
} from '../properties'
import {Page} from './types'

export function getPageIcon(block: Page): string | null {
  return block?.value?.format?.page_icon || null
}

const METADATA_TYPES = [
  'created_by',
  'created_time',
  'last_edited_by',
  'last_edited_time'
]

const metadataTypeToFieldName = {
  created_by: 'created_by_id',
  created_time: 'created_time',
  last_edited_by: 'last_edited_by_id',
  last_edited_time: 'last_edited_time'
}

function isMetadataType(propertyType: PropertyType) {
  return METADATA_TYPES.includes(propertyType)
}

export function getPagePropertyValue(
  block: Page,
  propertyType: PropertyType,
  propertyKey?: PropertyKey
):
  | PropertyValue
  | CreatedById
  | CreatedTime
  | LastEditedById
  | LastEditedTime
  | null {
  if (isMetadataType(propertyType)) {
    return block?.value?.[metadataTypeToFieldName[propertyType]] || null
  }

  return block?.value?.properties?.[propertyKey] || null
}
