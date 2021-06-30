import NotionClient from '../../NotionClient'
import {updateCollection} from '../../collections'
import {PropertyKey} from '../../properties'
import {Uuid} from '../../shared'
import {SchemaProperty} from '..'

export interface UpdateSchemaPropertyIds {
  collectionId: Uuid
  propertyKey: PropertyKey
  spaceId: Uuid
}

export function updateSchemaProperty(
  client: NotionClient,
  {collectionId, propertyKey, spaceId}: UpdateSchemaPropertyIds,
  schemaProperty: SchemaProperty
) {
  return updateCollection(
    client,
    {collectionId, spaceId},
    {command: 'update', path: ['schema', propertyKey], args: schemaProperty}
  )
}
