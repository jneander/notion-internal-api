import {Color} from '../shared/color'
import {Uuid} from '../shared/ids'

export type SelectProperty = {
  name: string
  type: 'select'
  options?: SelectPropertyOption[]
}

export type SelectPropertyOption = {
  id: Uuid
  color: Color
  value: string
}

export type SelectPropertyValue = [[string]]
