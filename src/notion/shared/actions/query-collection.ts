import NotionClient from '../../NotionClient'
import {
  Aggregation,
  AggregationResult,
  PropertyFilterGroup,
  Sort
} from '../../collection-queries'
import {Uuid} from '../ids'
import {RecordMap} from '../record-map'
import {getBlockFromRecordMap} from '../../blocks'

interface QueryCollectionIds {
  collectionId: Uuid
  collectionViewId: Uuid
}

type CollectionGroupReducer = {
  type: 'results'
  limit: number
}

type PropertyAggregation = {
  type: 'aggregation'
  aggregation: Aggregation
}

type PropertyAggregationResult = {
  type: 'aggregation'
  aggregationResult: AggregationResult
}

type CollectionGroupReducerResults = {
  blockIds: Uuid[]
  type: 'results'
  total: number
}

export type QueryCollectionLoader = {
  type: 'reducer'
  filter?: PropertyFilterGroup
  reducers: {
    collection_group_results: CollectionGroupReducer
    [key: string]: PropertyAggregation | CollectionGroupReducer
  }
  searchQuery: string
  sort?: Sort[]
  userTimeZone: string
}

interface QueryCollectionParameters {
  loader: QueryCollectionLoader
  query: {}
}

export interface QueryCollectionResponseData {
  result: {
    type: 'reducer'
    total?: number
    reducerResults: {
      collection_group_results: CollectionGroupReducerResults
      [key: string]: PropertyAggregationResult | CollectionGroupReducerResults
    }
  }
  recordMap: RecordMap
}

export function queryCollection(
  client: NotionClient,
  {collectionId, collectionViewId}: QueryCollectionIds,
  {loader, query = {}}: QueryCollectionParameters
) {
  const body = {
    collectionId,
    collectionViewId,
    loader,
    query
  }

  return client.post<QueryCollectionResponseData>('queryCollection', body)
}

export async function queryCompleteCollection(
  client: NotionClient,
  queryCollectionIds: QueryCollectionIds,
  {loader, query = {}}: QueryCollectionParameters
) {
  const {data, status} = await queryCollection(client, queryCollectionIds, {
    loader,
    query
  })

  if (status !== 200) {
    return {status, data}
  }

  const {total} = data.result.reducerResults.collection_group_results

  if (
    data.result.reducerResults.collection_group_results.blockIds.some(
      blockId => getBlockFromRecordMap(data.recordMap, blockId) == null
    )
  ) {
    const updatedLoader: QueryCollectionLoader = {
      ...loader,
      reducers: {
        ...loader.reducers,
        collection_group_results: {type: 'results', limit: total}
      }
    }

    return queryCollection(client, queryCollectionIds, {
      loader: updatedLoader,
      query
    })
  }

  return {status, data}
}
