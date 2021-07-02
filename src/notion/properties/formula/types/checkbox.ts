import {DateFormula} from './date'
import {NumberFormula} from './number'
import {IfFunction, PropertyValue, TypedConditional} from './shared'
import {TextFormula} from './text'

type CheckboxPropertyValue = PropertyValue<'checkbox'>

type CheckboxConditional = TypedConditional<'checkbox', CheckboxFormula>
type CheckboxIfFunction = IfFunction<'checkbox', CheckboxFormula>

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
  args: [CheckboxFormula]
}

type TwoArgumentCheckboxOperator<N, O> = {
  type: 'operator'
  operator: O
  name: N
  result_type: 'checkbox'
  args: [CheckboxFormula, CheckboxFormula]
}

interface TypedComparisonFunction<
  N,
  T = CheckboxFormula | DateFormula | NumberFormula | TextFormula
> {
  type: 'function'
  name: N
  result_type: 'checkbox'
  args: [T, T]
}

interface TypedComparisonOperator<
  N,
  O,
  T = CheckboxFormula | DateFormula | NumberFormula | TextFormula
> {
  type: 'operator'
  operator: O
  name: N
  result_type: 'checkbox'
  args: [T, T]
}

export type CheckboxFormula =
  | CheckboxConditional
  | CheckboxIfFunction
  | CheckboxPropertyValue
  | CheckboxSymbol
  | OneArgumentCheckboxFunction<
      'empty',
      CheckboxFormula | DateFormula | NumberFormula | TextFormula
    >
  | OneArgumentCheckboxOperator<'not', 'not'>
  | TwoArgumentCheckboxFunction<
      'test',
      DateFormula | NumberFormula | TextFormula,
      TextFormula
    >
  | TwoArgumentCheckboxFunction<'and', CheckboxFormula>
  | TwoArgumentCheckboxFunction<'contains', TextFormula>
  | TwoArgumentCheckboxFunction<'or', CheckboxFormula>
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
