import {isId} from '../ids'

export function textValueDecorationIsEquation(textValueDecoration) {
  return textValueDecoration?.length === 2 && textValueDecoration[0] === 'e'
}

export function textValueItemIsEquation(textValueItem) {
  return (
    textValueItem?.length === 2 &&
    textValueItem[0] === '⁍' &&
    textValueItem[1].some(textValueDecorationIsEquation)
  )
}

export function textValueDecorationIsAbsoluteLink(textValueDecoration) {
  return textValueDecoration?.length === 2 && textValueDecoration[0] === 'a'
}

export function textValueDecorationIsPageLink(textValueDecoration) {
  return (
    textValueDecoration?.length === 2 &&
    textValueDecoration[0] === 'a' &&
    textValueDecoration[1].startsWith('/') &&
    isId(textValueDecoration[1].substr(1))
  )
}
