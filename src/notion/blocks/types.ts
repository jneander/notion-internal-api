import {CollectionViewPage} from '../collection-view-pages'
import {CollectionView} from '../collection-views'
import {Page} from '../pages'

export type Block = CollectionView | CollectionViewPage | Page

export type BlockMap = {
  [blockId: string]: Block
}
