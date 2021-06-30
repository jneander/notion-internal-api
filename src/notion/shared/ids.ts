import {v4 as uuid} from 'uuid'

export type Uuid = string

const squishedUuidRegex = new RegExp(
  /^([0-9A-F]{8})([0-9A-F]{4})(4[0-9A-F]{3})([89AB][0-9A-F]{3})([0-9A-F]{12})$/i
)

export function buildId(): Uuid {
  return uuid()
}

function convertSquishedUuid(id): Uuid {
  const match = id.match(squishedUuidRegex)
  if (match == null) {
    return id
  }

  const [_, ...matches] = match
  return matches.join('-')
}

function isNormalizedUuid(id): boolean {
  return /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
    id
  )
}

function isSquishedUuid(id): boolean {
  return /^([0-9A-F]{8})([0-9A-F]{4})(4[0-9A-F]{3})([89AB][0-9A-F]{3})([0-9A-F]{12})$/i.test(
    id
  )
}

export function normalizeId(id): Uuid | null {
  if (id == null) {
    return null
  }

  if (isNormalizedUuid(id)) {
    return id
  }

  return convertSquishedUuid(id)
}

export function squishId(id): Uuid | null {
  if (id == null) {
    return null
  }

  return id.replace(/-/g, '').trim().toLowerCase()
}

export function isId(id) {
  if (id == null) {
    return false
  }

  return isNormalizedUuid(id) || isSquishedUuid(id)
}
