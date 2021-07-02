import {CheckboxFormula} from './checkbox'
import {DateFormula} from './date'
import {IfFunction, PropertyValue, TypedConditional} from './shared'
import {TextFormula} from './text'

type NumberPropertyValue = PropertyValue<'number'>

type NumberConditional = TypedConditional<'number', NumberFormula>
type NumberIfFunction = IfFunction<'number', NumberFormula>

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

interface OneArgumentNumberFunction<N, A = NumberFormula> {
  type: 'function'
  result_type: 'number'
  name: N
  args: [A]
}

type TwoArgumentNumberFunction = {
  type: 'function'
  result_type: 'number'
  name: 'add' | 'subtract' | 'multiply' | 'divide' | 'pow' | 'mod'
  args: [NumberFormula, NumberFormula]
}

type DateBetweenFunction = {
  type: 'function'
  result_type: 'number'
  name: 'dateBetween'
  args: [
    DateFormula,
    DateFormula,
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
  args: [NumberFormula, ...NumberFormula[]]
}

interface OneArgumentNumberOperator<N, O, A = NumberFormula> {
  type: 'operator'
  operator: O
  name: N
  result_type: 'number'
  args: [A]
}

interface OneArgumentNumberOperator<N, O, A = NumberFormula> {
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
  args: [NumberFormula, NumberFormula]
}

type DateConversion =
  | DateBetweenFunction
  | OneArgumentNumberFunction<'date', DateFormula>
  | OneArgumentNumberFunction<'day', DateFormula>
  | OneArgumentNumberFunction<'hour', DateFormula>
  | OneArgumentNumberFunction<'minute', DateFormula>
  | OneArgumentNumberFunction<'month', DateFormula>
  | OneArgumentNumberFunction<'timestamp', DateFormula>
  | OneArgumentNumberFunction<'year', DateFormula>

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
  | OneArgumentNumberFunction<'length', TextFormula>
  | OneArgumentNumberFunction<
      'toNumber',
      CheckboxFormula | DateFormula | NumberFormula | TextFormula
    >
  | OneArgumentNumberFunction<'unaryMinus'>
  | OneArgumentNumberFunction<
      'unaryPlus',
      CheckboxFormula | NumberFormula | TextFormula
    >
  | TwoArgumentNumberFunction
  | VariableArgumentNumberFunction

type NumberOperator =
  | OneArgumentNumberOperator<'unaryMinus', '-'>
  | OneArgumentNumberOperator<
      'unaryPlus',
      '+',
      CheckboxFormula | NumberFormula | TextFormula
    >

export type NumberFormula =
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
