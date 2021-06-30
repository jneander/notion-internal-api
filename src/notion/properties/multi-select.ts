import {Color} from '../shared/color'
import {Uuid} from '../shared/ids'

export type MultiSelectProperty = {
  name: string
  type: 'multi_select'
  options?: MultiSelectPropertyOption[]
}

export type MultiSelectPropertyOption = {
  id: Uuid
  color: Color
  value: string
}

export type MultiSelectPropertyValue = [[string]]
