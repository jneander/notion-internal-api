import {TextColor} from '../color'

export type TextValueStrongDecoration = ['b']
export type TextValueEmphasisDecoration = ['i']
export type TextValueStrikethroughDecoration = ['s']
export type TextValueUnderlineDecoration = ['_']
type TextValueStyleDecoration =
  | TextValueStrongDecoration
  | TextValueEmphasisDecoration
  | TextValueStrikethroughDecoration
  | TextValueUnderlineDecoration

export type TextValueColorDecoration = ['h', TextColor]
export type TextValueCodeDecoration = ['c']
export type TextValueEquationDecoration = ['e', string]
export type TextValueLinkDecoration = ['a', string]

export type TextValueDecoration =
  | TextValueStyleDecoration
  | TextValueLinkDecoration
  | TextValueColorDecoration
  | TextValueCodeDecoration
  | TextValueEquationDecoration

export type TextValueItem = [string, TextValueDecoration[]?]
export type TextValue = TextValueItem[]
