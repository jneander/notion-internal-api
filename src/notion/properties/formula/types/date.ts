import {NumberFormula} from './number'
import {IfFunction, PropertyValue, TypedConditional} from './shared'

type DatePropertyValue = PropertyValue<'date'>

type DateConditional = TypedConditional<'date', DateFormula>
type DateIfFunction = IfFunction<'date', DateFormula>

type NamedDateFunction = {
  type: 'function'
  result_type: 'date'
  name: 'now'
}

interface OneArgumentDateFunction<N, A = DateFormula> {
  type: 'function'
  result_type: 'date'
  name: N
  args: [A]
}

type DateMathFunction = {
  type: 'function'
  result_type: 'date'
  name: 'dateAdd' | 'dateSubtract'
  args: [
    DateFormula,
    NumberFormula,
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

type DateFunction = NamedDateFunction

export type DateFormula =
  | DateConditional
  | DateFunction
  | DateIfFunction
  | DateMathFunction
  | DatePropertyValue
  | OneArgumentDateFunction<'end'>
  | OneArgumentDateFunction<'fromTimestamp', NumberFormula>
  | OneArgumentDateFunction<'start'>
