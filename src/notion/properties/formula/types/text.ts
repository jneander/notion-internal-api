import {CheckboxResult} from './checkbox'
import {DateResult} from './date'
import {NumberResult} from './number'
import {IfFunction, PropertyValue, TypedConditional} from './shared'

type TextPropertyValue = PropertyValue<'text'>

type TextConditional = TypedConditional<'text', TextResult>
type TextIfFunction = IfFunction<'text', TextResult>

type TextConstant = {
  type: 'constant'
  result_type: 'text'
  value: string
  value_type: 'string'
}

type FormatDateFunction = {
  type: 'function'
  result_type: 'text'
  name: 'formatDate'
  args: [DateResult, TextResult]
}

type FormatValueFunction = {
  type: 'function'
  result_type: 'text'
  name: 'format'
  args: [CheckboxResult | DateResult | NumberResult | TextResult]
}

type TwoArgumentTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'add'
  args: [TextResult, TextResult]
}

type ReplaceTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'replace' | 'replaceAll'
  args: [CheckboxResult | NumberResult | TextResult, TextResult, TextResult]
}

type VariableArgumentTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'concat' | 'join'
  args: [TextResult, ...TextResult[]]
}

type SliceTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'slice'
  args: [TextResult, NumberResult, NumberResult?]
}

type AddOperator = {
  type: 'operator'
  result_type: 'text'
  operator: '+'
  name: 'add'
  args: [TextResult, TextResult]
}

export type TextResult =
  | AddOperator
  | FormatDateFunction
  | FormatValueFunction
  | ReplaceTextFunction
  | SliceTextFunction
  | TextConditional
  | TextConstant
  | TextIfFunction
  | TextPropertyValue
  | TwoArgumentTextFunction
  | VariableArgumentTextFunction
