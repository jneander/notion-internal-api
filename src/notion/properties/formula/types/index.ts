export * from './checkbox'
export * from './date'
export * from './number'
export * from './text'

import {CheckboxFormula} from './checkbox'
import {DateFormula} from './date'
import {NumberFormula} from './number'
import {TextFormula} from './text'

export type FormulaProperty = {
  name: string
  type: 'formula'
  formula?: CheckboxFormula | DateFormula | NumberFormula | TextFormula
}
