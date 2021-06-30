import type {Block} from '../../blocks'
import type {Uuid} from '../ids'

export type OperationCommand =
  | 'keyedObjectListRemove'
  | 'keyedObjectListUpdate'
  | 'set'
  | 'update'

export type OperationPointer = {
  id: Uuid
  table: 'block' | 'collection'
  spaceId: Uuid
}

export type Operation = {
  pointer: OperationPointer
  command: OperationCommand
  path: string[]
  args: any
}

export function pointerForBlock(block: Block): OperationPointer {
  return {
    id: block.value.id,
    spaceId: block.value.space_id,
    table: 'block'
  }
}

export function buildBlockSetOperation(
  blockId: Uuid,
  spaceId: Uuid,
  path: string[],
  args: any
): Operation {
  return {
    pointer: {
      id: blockId,
      spaceId,
      table: 'block'
    },

    args,
    command: 'set',
    path
  }
}
