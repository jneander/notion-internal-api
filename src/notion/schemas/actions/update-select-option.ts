import NotionClient from '../../NotionClient'
import {PropertyKey, SelectPropertyOption} from '../../properties'
import {Uuid, keyedObjectListUpdate} from '../../shared'

export interface UpdateSelectOptionIds {
  collectionId: Uuid
  propertyKey: PropertyKey
  spaceId: Uuid
}

export interface RenameSelectOptionTaskRequest {}

export async function updateSelectOption(
  client: NotionClient,
  {collectionId, propertyKey, spaceId}: UpdateSelectOptionIds,
  option: SelectPropertyOption
) {
  const result = await keyedObjectListUpdate(
    client,
    {spaceId},

    {
      path: ['schema', propertyKey, 'options'],
      args: {value: option},
      pointer: {id: collectionId, table: 'collection', spaceId}
    }
  )

  //   await enqueueTask(client, {
  //       eventName: 'renameGroup',
  //       request: {
  //         collectionId,
  //         property: propertyKey,
  //         oldValue: { type: 'multi_select', value: 'C' },
  //         newValue: { type: 'multi_select', value: 'C!' }
  //       }
  //   })

  //   // enqueueTask
  //   const body = {
  //     task: {
  //       eventName: 'renameGroup',
  //       request: {
  //         collectionId: 'b3b9d495-d3db-485a-a48f-a4af946e4db3',
  //         property: 'AYyE',
  //         oldValue: { type: 'multi_select', value: 'C' },
  //         newValue: { type: 'multi_select', value: 'C!' }
  //       }
  //     }
  //   }

  return result
}
