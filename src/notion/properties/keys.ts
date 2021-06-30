import {randomIndex} from '../../utils'

export type PropertyKey = string

const KEY_CHARACTERS =
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

function randChar() {
  return randomIndex(KEY_CHARACTERS)
}

export function buildPropertyKey(): PropertyKey {
  return `${randChar()}${randChar()}${randChar()}${randChar()}`
}

export function buildUniquePropertyKeyForCollection(collection) {
  let key = buildPropertyKey()
  while (key in collection.value.schema) {
    key = buildPropertyKey()
  }
  return key
}
