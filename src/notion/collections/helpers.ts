import {RecordMap, Uuid} from '../shared'
import {Collection} from './types'

export function getCollectionFromRecordMap(
  recordMap: RecordMap,
  collectionId: Uuid
): Collection | null {
  return recordMap.collection?.[collectionId] || null
}

export function getCollectionIcon(collection: Collection): string | null {
  return collection?.value?.icon || null
}

function alphabeticalSchemaSortFn(schemaDatumA, schemaDatumB) {
  if (schemaDatumA.schemaProperty.name === schemaDatumB.schemaProperty.name) {
    return schemaDatumA.propertyKey > schemaDatumB.propertyKey ? 1 : -1
  }

  return schemaDatumA.schemaProperty.name > schemaDatumB.schemaProperty.name
    ? 1
    : -1
}

export function getCollectionSchemaData(collection) {
  const {format, schema} = collection.value

  const {title, ...schemaCopy} = schema
  const schemaData = []

  const titleDatum = {
    schemaProperty: schema.title,
    propertyKey: 'title',
    visible: true
  }

  format?.collection_page_properties?.forEach(
    ({property: propertyKey, visible}) => {
      if (propertyKey in schemaCopy) {
        schemaData.push({
          schemaProperty: schema[propertyKey],
          propertyKey: propertyKey,
          visible
        })
        delete schemaCopy[propertyKey]
      }
    }
  )

  Object.keys(schemaCopy).forEach(propertyKey => {
    schemaData.push({
      schemaProperty: schema[propertyKey],
      propertyKey,
      visible: true
    })
  })

  if (format?.collection_page_properties?.[0] == null) {
    schemaData.sort(alphabeticalSchemaSortFn)
  }

  return [titleDatum].concat(schemaData)
}
