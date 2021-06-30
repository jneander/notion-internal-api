import {CheckboxResult} from './checkbox'
import {DateResult} from './date'
import {IfFunction, PropertyValue, TypedConditional} from './shared'
import {TextResult} from './text'

type NumberPropertyValue = PropertyValue<'number'>

type NumberConditional = TypedConditional<'number', NumberResult>
type NumberIfFunction = IfFunction<'number', NumberResult>

type NumberSymbol = {
  type: 'symbol'
  result_type: 'number'
  name: 'e' | 'pi'
}

type NumberConstant = {
  type: 'constant'
  result_type: 'number'
  value: string
  value_type: 'number'
}

interface OneArgumentNumberFunction<N, A = NumberResult> {
  type: 'function'
  result_type: 'number'
  name: N
  args: [A]
}

type TwoArgumentNumberFunction = {
  type: 'function'
  result_type: 'number'
  name: 'add' | 'subtract' | 'multiply' | 'divide' | 'pow' | 'mod'
  args: [NumberResult, NumberResult]
}

type DateBetweenFunction = {
  type: 'function'
  result_type: 'number'
  name: 'dateBetween'
  args: [
    DateResult,
    DateResult,
    (
      | 'years'
      | 'quarters'
      | 'months'
      | 'weeks'
      | 'days'
      | 'hours'
      | 'minutes'
      | 'seconds'
      | 'milliseconds'
    )
  ]
}

type VariableArgumentNumberFunction = {
  type: 'function'
  result_type: 'number'
  name: 'max' | 'min'
  args: [NumberResult, ...NumberResult[]]
}

interface OneArgumentNumberOperator<N, O, A = NumberResult> {
  type: 'operator'
  operator: O
  name: N
  result_type: 'number'
  args: [A]
}

interface OneArgumentNumberOperator<N, O, A = NumberResult> {
  type: 'operator'
  operator: O
  name: N
  result_type: 'number'
  args: [A]
}

type TwoArgumentNumberOperator<N, O> = {
  type: 'operator'
  operator: O
  name: N
  result_type: 'number'
  args: [NumberResult, NumberResult]
}

type DateConversion =
  | DateBetweenFunction
  | OneArgumentNumberFunction<'date', DateResult>
  | OneArgumentNumberFunction<'day', DateResult>
  | OneArgumentNumberFunction<'hour', DateResult>
  | OneArgumentNumberFunction<'minute', DateResult>
  | OneArgumentNumberFunction<'month', DateResult>
  | OneArgumentNumberFunction<'timestamp', DateResult>
  | OneArgumentNumberFunction<'year', DateResult>

type BasicMath =
  | TwoArgumentNumberOperator<'add', '+'>
  | TwoArgumentNumberOperator<'subtract', '-'>
  | TwoArgumentNumberOperator<'multiply', '*'>
  | TwoArgumentNumberOperator<'pow', '^'>
  | TwoArgumentNumberOperator<'mod', '%'>
  | TwoArgumentNumberOperator<'divide', '/'>

type ScientificMath =
  | OneArgumentNumberFunction<'abs'>
  | OneArgumentNumberFunction<'cbrt'>
  | OneArgumentNumberFunction<'ceil'>
  | OneArgumentNumberFunction<'exp'>
  | OneArgumentNumberFunction<'floor'>
  | OneArgumentNumberFunction<'ln'>
  | OneArgumentNumberFunction<'log10'>
  | OneArgumentNumberFunction<'log2'>
  | OneArgumentNumberFunction<'round'>
  | OneArgumentNumberFunction<'sign'>
  | OneArgumentNumberFunction<'sqrt'>

type NumberFunction =
  | OneArgumentNumberFunction<'length', TextResult>
  | OneArgumentNumberFunction<
      'toNumber',
      CheckboxResult | DateResult | NumberResult | TextResult
    >
  | OneArgumentNumberFunction<'unaryMinus'>
  | OneArgumentNumberFunction<
      'unaryPlus',
      CheckboxResult | NumberResult | TextResult
    >
  | TwoArgumentNumberFunction
  | VariableArgumentNumberFunction

type NumberOperator =
  | OneArgumentNumberOperator<'unaryMinus', '-'>
  | OneArgumentNumberOperator<
      'unaryPlus',
      '+',
      CheckboxResult | NumberResult | TextResult
    >

export type NumberResult =
  | BasicMath
  | DateConversion
  | NumberConditional
  | NumberConstant
  | NumberFunction
  | NumberIfFunction
  | NumberOperator
  | NumberPropertyValue
  | NumberSymbol
  | ScientificMath
