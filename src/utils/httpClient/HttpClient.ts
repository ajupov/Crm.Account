import 'isomorphic-fetch'

import { stringify } from 'query-string'

type HttpMethod = 'GET' | 'POST'

const ApplicationJsonContentType = 'application/json'
const NoCacheHeaderValue = 'no-cache'

export class HttpClient {
    public async get<T>(uri: string, data?: object): Promise<T> {
        const params = this.getParams('GET')
        const response = await fetch(uri + stringify(data || {}), params)

        this.checkError(response)
        this.checkRedirect(response)

        return this.convertToJson<T>(response)
    }

    public async post<T>(uri: string, body?: object): Promise<T> {
        const params = this.getParams('POST', body)
        const response = await fetch(uri, params)

        this.checkError(response)
        this.checkRedirect(response)

        return this.convertToJson<T>(response)
    }

    private getParams(method: HttpMethod, body?: object): any {
        const defaultParams = {
            headers: {
                Accept: ApplicationJsonContentType,
                'Content-Type': ApplicationJsonContentType,
                pragma: NoCacheHeaderValue,
                'cache-control': NoCacheHeaderValue
            },
            credentials: 'same-origin',
            mode: 'cors'
        }

        const result = { ...defaultParams, method }
        if (method === 'POST') {
            return { ...result, body: JSON.stringify(body) }
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
