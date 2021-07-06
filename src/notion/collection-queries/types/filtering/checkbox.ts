type CheckboxComparisonFilter = {
  operator: 'checkbox_is' | 'checkbox_is_not'
  value: {
    type: 'exact'
    value: boolean
  }
}

export type CheckboxFilter = CheckboxComparisonFilter
