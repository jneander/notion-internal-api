import {DateResult} from './date'
import {NumberResult} from './number'
import {IfFunction, PropertyValue, TypedConditional} from './shared'
import {TextResult} from './text'

type CheckboxPropertyValue = PropertyValue<'checkbox'>

type CheckboxConditional = TypedConditional<'checkbox', CheckboxResult>
type CheckboxIfFunction = IfFunction<'checkbox', CheckboxResult>

type CheckboxSymbol = {
  name: 'true' | 'false'
  type: 'symbol'
  result_type: 'checkbox'
}

interface OneArgumentCheckboxFunction<N, T> {
  type: 'function'
  result_type: 'checkbox'
  name: N
  args: [T]
}

interface TwoArgumentCheckboxFunction<N, T1, T2 = T1> {
  type: 'function'
  result_type: 'checkbox'
  name: N
  args: [T1, T2]
}

type OneArgumentCheckboxOperator<N, O> = {
  type: 'operator'
  operator: O
  name: N
  result_type: 'checkbox'
  args: [CheckboxResult]
}

type TwoArgumentCheckboxOperator<N, O> = {
  type: 'operator'
  operator: O
  name: N
  result_type: 'checkbox'
  args: [CheckboxResult, CheckboxResult]
}

interface TypedComparisonFunction<
  N,
  T = CheckboxResult | DateResult | NumberResult | TextResult
> {
  type: 'function'
  name: N
  result_type: 'checkbox'
  args: [T, T]
}

interface TypedComparisonOperator<
  N,
  O,
  T = CheckboxResult | DateResult | NumberResult | TextResult
> {
  type: 'operator'
  operator: O
  name: N
  result_type: 'checkbox'
  args: [T, T]
}

export type CheckboxResult =
  | CheckboxConditional
  | CheckboxIfFunction
  | CheckboxPropertyValue
  | CheckboxSymbol
  | OneArgumentCheckboxFunction<
      'empty',
      CheckboxResult | DateResult | NumberResult | TextResult
    >
  | OneArgumentCheckboxOperator<'not', 'not'>
  | TwoArgumentCheckboxFunction<
      'test',
      DateResult | NumberResult | TextResult,
      TextResult
    >
  | TwoArgumentCheckboxFunction<'and', CheckboxResult>
  | TwoArgumentCheckboxFunction<'contains', TextResult>
  | TwoArgumentCheckboxFunction<'or', CheckboxResult>
  | TwoArgumentCheckboxOperator<'and', 'and'>
  | TypedComparisonFunction<'equal'>
  | TypedComparisonFunction<'larger'>
  | TypedComparisonFunction<'largerEq'>
  | TypedComparisonFunction<'notEqual'>
  | TypedComparisonFunction<'smaller'>
  | TypedComparisonFunction<'smallerEq'>
  | TypedComparisonFunction<'unEqual'>
  | TypedComparisonOperator<'equal', '=='>
  | TypedComparisonOperator<'larger', '>'>
  | TypedComparisonOperator<'largerEq', '>='>
  | TypedComparisonOperator<'notEqual', '!='>
  | TypedComparisonOperator<'smaller', '<'>
  | TypedComparisonOperator<'smallerEq', '<='>
  | TypedComparisonOperator<'unEqual', '!='>
