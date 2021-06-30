import {NumberResult} from './number'
import {IfFunction, PropertyValue, TypedConditional} from './shared'

type DatePropertyValue = PropertyValue<'date'>

type DateConditional = TypedConditional<'date', DateResult>
type DateIfFunction = IfFunction<'date', DateResult>

type NamedDateFunction = {
  type: 'function'
  result_type: 'date'
  name: 'now'
}

interface OneArgumentDateFunction<N, A = DateResult> {
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
    DateResult,
    NumberResult,
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

export type DateResult =
  | DateConditional
  | DateFunction
  | DateIfFunction
  | DateMathFunction
  | DatePropertyValue
  | OneArgumentDateFunction<'end'>
  | OneArgumentDateFunction<'fromTimestamp', NumberResult>
  | OneArgumentDateFunction<'start'>
