import 'isomorphic-fetch'

import { stringify } from 'query-string'

type HttpMethod = 'GET' | 'POST'

const ApplicationJsonContentType = 'application/json'
const NoCacheHeaderValue = 'no-cache'

export class HttpClient {
    private readonly _host: string | undefined

    constructor(host?: string) {
        this._host = host
    }

    public async get<T>(uri: string, data?: object): Promise<T> {
        const params = this.getParams('GET')
        const response = await fetch(this._host + uri + stringify(data || {}), params)

        this.checkError(response)
        this.checkRedirect(response)

        return this.convertToJson<T>(response)
    }

    public async post<T>(uri: string, body?: object): Promise<T> {
        const params = this.getParams('POST', body)
        const response = await fetch(this._host + uri, params)

        this.checkError(response)
        this.checkRedirect(response)

        return this.convertToJson<T>(response)
    }

    private getParams(method: HttpMethod, body?: object): any {
        return {
            method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
                Accept: ApplicationJsonContentType,
                'Content-Type': ApplicationJsonContentType,
                pragma: NoCacheHeaderValue,
                'cache-control': NoCacheHeaderValue
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: method === 'POST' ? JSON.stringify(body) : null
        }
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