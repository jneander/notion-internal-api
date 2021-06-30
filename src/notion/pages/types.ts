import type {PageProperties} from '../properties'
import type {
  BaseBlock,
  BaseBlockValue,
  Permission,
  Pointer,
  Uuid
} from '../shared'

export type PageFormat = {
  copied_from_pointer?: Pointer
  page_cover?: string
  page_cover_position?: number
  page_icon?: string
  page_full_width?: boolean
  page_small_text?: boolean
}

export type PageValue = BaseBlockValue & {
  content?: Uuid[]
  discussions?: Uuid[]
  file_ids?: Uuid[]
  format?: PageFormat
  permissions?: Permission[]
  properties?: PageProperties
  type: 'page'
}

export type Page = BaseBlock & {
  value: PageValue
}
