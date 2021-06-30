import type {RecordMap, Uuid} from '../shared'
import {BLOCK_TYPES} from './constants'
import type {Block} from './types'

export function getBlockFromRecordMap(
  recordMap: RecordMap,
  blockId: Uuid
): Block | null {
  return recordMap.block?.[blockId] || null
}

export function blockIsEmpty(block) {
  return (
    block?.value?.type === BLOCK_TYPES.text &&
    (block?.value?.properties?.title == null ||
      block?.value?.properties?.title[0].join('').trim() === '')
  )
}

export function getBlockIcon(block) {
  return block?.value?.format?.page_icon || null
}
