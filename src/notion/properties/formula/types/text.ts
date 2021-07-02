import {CheckboxFormula} from './checkbox'
import {DateFormula} from './date'
import {NumberFormula} from './number'
import {IfFunction, PropertyValue, TypedConditional} from './shared'

type TextPropertyValue = PropertyValue<'text'>

type TextConditional = TypedConditional<'text', TextFormula>
type TextIfFunction = IfFunction<'text', TextFormula>

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
  args: [DateFormula, TextFormula]
}

type FormatValueFunction = {
  type: 'function'
  result_type: 'text'
  name: 'format'
  args: [CheckboxFormula | DateFormula | NumberFormula | TextFormula]
}

type TwoArgumentTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'add'
  args: [TextFormula, TextFormula]
}

type ReplaceTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'replace' | 'replaceAll'
  args: [
    CheckboxFormula | NumberFormula | TextFormula,
    TextFormula,
    TextFormula
  ]
}

type VariableArgumentTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'concat' | 'join'
  args: [TextFormula, ...TextFormula[]]
}

type SliceTextFunction = {
  type: 'function'
  result_type: 'text'
  name: 'slice'
  args: [TextFormula, NumberFormula, NumberFormula?]
}

type AddOperator = {
  type: 'operator'
  result_type: 'text'
  operator: '+'
  name: 'add'
  args: [TextFormula, TextFormula]
}

export type TextFormula =
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
