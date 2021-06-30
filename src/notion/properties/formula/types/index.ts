import {CheckboxResult} from './checkbox'
import {DateResult} from './date'
import {NumberResult} from './number'
import {TextResult} from './text'

export type FormulaProperty = {
  name: string
  type: 'formula'
  formula?: CheckboxResult | DateResult | NumberResult | TextResult
}
