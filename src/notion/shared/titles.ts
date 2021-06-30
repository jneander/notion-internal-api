import {isId} from './ids'

export function markupEntryIsAbsoluteLink(markupEntry) {
  return markupEntry?.length === 2 && markupEntry[0] === 'a'
}

export function markupEntryIsPageLink(markupEntry) {
  return markupEntry?.length === 2 && markupEntry[0] === 'p' && isId(markupEntry[1])
}
