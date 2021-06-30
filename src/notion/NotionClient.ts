const API_BASE_URL = 'https://www.notion.so/api/v3'

export default class NotionClient {
  private fetch: (...any) => any
  private token: string

  constructor({fetch, token}) {
    this.fetch = fetch
    this.token = token
  }

  async loadUserContent() {
    return this.post('loadUserContent')
  }

  async enqueueTask(task) {
    return this.post('enqueueTask', {task})
  }

  async post<T>(
    action: string,
    message: any = {}
  ): Promise<{status: number; data: null | T}> {
    const response = await this.__singlePost(action, message)

    return {
      status: response.status,
      data: response.status === 200 ? await response.json() : null
    }
  }

  // PRIVATE

  async __singlePost(action: string, message: any) {
    return this.fetch(
      `${API_BASE_URL}/${action}`,

      {
        body: JSON.stringify(message),
        credentials: 'include',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Cookie: `token_v2=${this.token}`
        },

        method: 'POST',
        mode: 'cors'
      }
    )
  }
}
