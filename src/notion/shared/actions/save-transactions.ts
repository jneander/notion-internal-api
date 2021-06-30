import {v4 as uuid} from 'uuid'

import NotionClient from '../../NotionClient'
import {Transaction} from '../transactions'

interface SaveTransactionsParameters {
  transactions: Transaction[]
}

export function saveTransactions(
  client: NotionClient,
  {transactions}: SaveTransactionsParameters
) {
  const body = {
    requestId: uuid(),
    transactions
  }

  return client.post<{}>('saveTransactions', body)
}
