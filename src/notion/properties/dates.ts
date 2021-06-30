export type DateFormat =
  | 'll'
  | 'MM/DD/YYYY'
  | 'DD/MM/YYYY'
  | 'YYYY/MM/DD'
  | 'relative'

/* Default (unassigned) is 'LT' (12-hour) */
export type TimeFormat = 'LT' | 'H:mm'

export type DateProperty = {
  name: string
  type: 'date'
  date_format?: DateFormat
  time_format?: TimeFormat
}

export type DatePropertyDatum = {
  start_date: string
  type: 'date'
}

export type DateTimePropertyDatum = {
  start_date: string
  start_time: string
  time_zone: string
  type: 'datetime'
}

export type DateTimeRangePropertyDatum = {
  end_date: string
  end_time: string
  start_date: string
  start_time: string
  time_zone: string
  type: 'datetimerange'
}

export type DatePropertyValue = [
  ['‣', [['d', DatePropertyDatum | DateTimePropertyDatum]]]
]

function toNumber(v: string): number {
  return Number.parseInt(v, 10)
}

export class NotionDate {
  private attr: DatePropertyDatum | DateTimePropertyDatum

  constructor(attr: DatePropertyDatum | DateTimePropertyDatum) {
    this.attr = attr
  }

  get timeZone() {
    if ('time_zone' in this.attr) {
      return this.attr.time_zone
    }
    return null
  }

  get type() {
    return this.attr.type
  }

  toNativeDate(): Date {
    const dateParams: number[] = this.attr.start_date.split('-').map(toNumber)
    const [year, month, day] = [dateParams[0], dateParams[1] - 1, dateParams[2]]
    dateParams[1] = dateParams[1] - 1

    if (this.attr.type === 'date') {
      return new Date(year, month, day)
    }

    const [hour, minute] = this.attr.start_time.split(':').map(toNumber)

    let date = new Date(year, month, day, hour, minute)

    // TODO: use locale of user
    const utcDate = new Date(
      date.toLocaleString('en-US', {timeZone: this.timeZone})
    )
    const tzDate = new Date(
      date.toLocaleString('en-US', {timeZone: this.timeZone})
    )
    const diff = utcDate.getTime() - tzDate.getTime()

    return new Date(date.getTime() - diff)
  }

  toDateString() {}
}
