import {BaseBlock, BaseBlockValue, Permission, Pointer, Uuid} from '../shared'

export type CollectionViewPageValue = BaseBlockValue & {
  type: 'collection_view_page'
  collection_id: Uuid
  format?: {
    block_locked?: boolean
    block_locked_by?: Uuid
    card_cover_position?: number
    collection_pointer?: Pointer
    copied_from_pointer?: Pointer
    page_cover?: string
    page_cover_position?: number
    page_icon?: string
  }
  permissions?: Permission[]
  view_ids: Uuid[]
}

export type CollectionViewPage = BaseBlock & {
  value: CollectionViewPageValue
}
