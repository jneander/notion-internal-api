import NotionClient from '../../NotionClient'
import {updateCollection} from '../../collections'
import {CollectionSchema} from '../../schemas'
import {Uuid} from '../../shared'

export interface UpdateSchemaIds {
  collectionId: Uuid
  spaceId: Uuid
}

export function updateSchema(
  client: NotionClient,
  {collectionId, spaceId}: UpdateSchemaIds,
  schema: CollectionSchema
) {
  return updateCollection(
    client,
    {collectionId, spaceId},
    {command: 'update', path: [], args: {schema}}
  )
}
