export const NUMBER_FORMATS = [
  {format: 'number', label: 'Number'},
  {format: 'number_with_commas', label: 'Number with Commas'},
  {format: 'percent', label: 'Percent'},
  {format: 'dollar', label: 'Dollar'},
  {format: 'euro', label: 'Euro'},
  {format: 'pound', label: 'Pound'},
  {format: 'yen', label: 'Yen'},
  {format: 'ruble', label: 'Ruble'},
  {format: 'rupee', label: 'Rupee'},
  {format: 'won', label: 'Won'},
  {format: 'yuan', label: 'Yuan'},
  {format: 'real', label: 'Real'},
  {format: 'lira', label: 'Lira'},
  {format: 'rupiah', label: 'Rupiah'}
]

export type NumberProperty = {
  name: string
  type: 'number'
  number_format?:
    | 'dollar'
    | 'euro'
    | 'lira'
    | 'number'
    | 'number_with_commas'
    | 'percent'
    | 'pound'
    | 'real'
    | 'ruble'
    | 'rupee'
    | 'rupiah'
    | 'won'
    | 'yen'
    | 'yuan'
}

export type NumberPropertyValue = [[string]]
