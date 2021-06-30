import {Uuid} from '../shared'

export type PersonProperty = {
  name: string
  type: 'person'
}

type PersonPropertyValueItem = ['‣', [['r' | 'u', Uuid /* userId */]]]

export type PersonPropertyValue = Array<PersonPropertyValueItem | [',']>

export function getUserIdsFromPersonPropertyValue(value: PersonPropertyValue): Uuid[] {
  return (value || [])
    .filter(valueItem => valueItem[0] !== ',')
    .map(valueItem => valueItem[1][0][1])
}
