export function randomIndex<T>(hasLength: T[]): T | undefined
export function randomIndex(hasLength: string): string | undefined

export function randomIndex<T extends {length: number}>(hasLength: T | T[]): T {
  return hasLength[Math.floor(Math.random() * hasLength.length)]
}

export function uniqueValues(values): Array<any> {
  const indexedMap = {}
  const result = []

  values.forEach(value => {
    if (!(value in indexedMap)) {
      result.push(value)
      indexedMap[value] = value
    }
  })

  return result
}

export function isDefined(value) {
  return !!value
}
