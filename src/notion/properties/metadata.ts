import {Uuid} from '../shared/ids'

export type CreatedByProperty = {
  name: string
  type: 'created_by'
}

export type CreatedTimeProperty = {
  name: string
  type: 'created_time'
}

export type LastEditedByProperty = {
  name: string
  type: 'last_edited_by'
}

export type LastEditedTimeProperty = {
  name: string
  type: 'last_edited_time'
}

export type CreatedTime = number
export type LastEditedTime = number

type EditorTable = 'notion_user'
export type CreatedByTable = EditorTable
export type LastEditedByTable = EditorTable

export type CreatedById = Uuid
export type LastEditedById = Uuid
