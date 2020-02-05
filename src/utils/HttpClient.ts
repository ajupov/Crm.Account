import 'isomorphic-fetch'

import { stringify } from 'query-string'

export class HttpClient {
    public async get<T>(uri: string, data?: object): Promise<T> {
        const params = this.getParams('get')
        const response = await fetch(uri + stringify(data || {}), params)

        this.checkError(response)
        this.checkRedirect(response)

        return this.convertToJson<T>(response)
    }

    public async post<T>(uri: string, body?: object): Promise<T> {
        const params = this.getParams('post', body)
        const response = await fetch(uri, params)

        this.checkError(response)
        this.checkRedirect(response)

        return this.convertToJson<T>(response)
    }

    private getParams(method: string, body?: object): any {
        const defaultParams = {
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                pragma: 'no-cache'
            }
        }

        const result = Object.assign({}, defaultParams, { method })

        if (method === 'post') {
            return Object.assign({}, result, { body: JSON.stringify(body) })
        }

        return result
    }

    private checkError(response: Response): void {
        if (!response.ok) {
            throw Error(response.statusText)
        }
    }

    private checkRedirect(response: Response): void {
        const location = response.headers.get('location')
        if (location) {
            window.location.href = location
        }
    }

    private async convertToJson<T>(response: Response): Promise<T> {
        const result = await response.json()

        return (result as unknown) as T
    }
}
