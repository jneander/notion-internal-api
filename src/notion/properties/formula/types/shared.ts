import {PropertyKey} from '../../keys'
import {CheckboxResult} from './checkbox'

export type ValueType = 'checkbox' | 'date' | 'number' | 'text'

export type PropertyValue<T = ValueType> = {
  id: PropertyKey
  name: string
  result_type: T
  type: 'property'
}

export interface TypedConditional<T, R> {
  type: 'conditional'
  result_type: T
  condition: CheckboxResult
  true: R
  false: R
}

export interface IfFunction<T, R> {
  type: 'function'
  result_type: T
  name: 'if'
  args: [CheckboxResult, R, R]
}
