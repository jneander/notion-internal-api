import NotionClient from '../../NotionClient'
import {PropertyKey} from '../../properties'
import {Uuid, keyedObjectListRemove} from '../../shared'

export interface DeleteSelectOptionIds {
  collectionId: Uuid
  propertyKey: PropertyKey
  spaceId: Uuid
}

export async function deleteSelectOption(
  client: NotionClient,
  {collectionId, propertyKey, spaceId}: DeleteSelectOptionIds,
  optionId: Uuid
) {
  const result = await keyedObjectListRemove(
    client,
    {spaceId},

    {
      path: ['schema', propertyKey, 'options'],
      args: {remove: {id: optionId}},
      pointer: {id: collectionId, table: 'collection', spaceId}
    }
  )

  return result
}
