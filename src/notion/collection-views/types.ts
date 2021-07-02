import type {
  Aggregation,
  PropertyFilterGroup,
  Sort
} from '../collection-queries'
import type {PropertyKey} from '../properties'
import type {BaseBlock, BaseBlockValue, Uuid} from '../shared'

export type CollectionViewType =
  | 'table'
  | 'board'
  | 'timeline'
  | 'calendar'
  | 'list'
  | 'gallery'

export type BoardColumnsFormat = {
  hidden: boolean
  property: PropertyKey
  value: {
    type: 'select'
  }
}

export type BoardPropertiesFormat = {
  property: PropertyKey
  visible: boolean
}

export type ListPropertiesFormat = {
  property: PropertyKey
  visible: boolean
}

export type TablePropertiesFormat = {
  width: number
  visible: boolean
  property: PropertyKey
}

export type CollectionViewValue = BaseBlockValue & {
  type: CollectionViewType

  format?: {
    board_columns?: BoardColumnsFormat[]

    board_columns_by?: {
      // TODO: support variations
      property: PropertyKey
      value: {
        type: 'select'
      }
    }

    board_properties?: BoardPropertiesFormat[]

    gallery_cover?: {
      // TODO: support variations
      type: 'page_content'
    }

    inline_collection_first_load_limit?: {
      type: 'load_limit'
      limit: number
    }

    list_properties?: ListPropertiesFormat[]
    table_properties?: TablePropertiesFormat[]
    table_wrap?: boolean

    timeline_preference?: {
      centerTimeStamp: number
      zoomLevel: 'month'
    }
  }

  name?: string
  page_sort: Uuid[]

  query2?: {
    aggregations?: Aggregation[]
    filter?: PropertyFilterGroup
    sort?: Sort[]
  }
}

export type CollectionView = BaseBlock & {
  value: CollectionViewValue
}

export type CollectionViewMap = {
  [collectionViewId: string]: CollectionView
}
