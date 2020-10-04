import 'isomorphic-fetch'

import { stringify } from 'query-string'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

const ApplicationJsonContentType = 'application/json'
const NoCacheHeaderValue = 'no-cache'

export default class HttpClient {
    private readonly _host: string | undefined

    constructor(host?: string) {
        this._host = host
    }

    public async get<T>(uri: string, data?: Record<string, any>): Promise<T> {
        const fetchParams = this.getFetchParams('GET')
        const queryParams = data ? '?' + stringify(data) : ''

        const response = await fetch(this.getUrl(uri) + queryParams, fetchParams)

        this.checkRedirect(response)
        this.checkError(response)

        return this.convertToJson<T>(response)
    }

    public async post<T>(uri: string, body?: Record<string, any>): Promise<T> {
        const fetchParams = this.getFetchParams('POST', body)
        const response = await fetch(this.combineUrl(this._host, uri), fetchParams)

        this.checkRedirect(response)
        this.checkError(response)

        return this.convertToJson<T>(response)
    }

    public async put<T>(uri: string, body?: Record<string, any>): Promise<T> {
        const fetchParams = this.getFetchParams('PUT', body)
        const response = await fetch(this.combineUrl(this._host, uri), fetchParams)

        this.checkRedirect(response)
        this.checkError(response)

        return this.convertToJson<T>(response)
    }

    public async patch<T>(uri: string, body?: Record<string, any>): Promise<T> {
        const fetchParams = this.getFetchParams('PATCH', body)
        const response = await fetch(this.combineUrl(this._host, uri), fetchParams)

        this.checkRedirect(response)
        this.checkError(response)

        return this.convertToJson<T>(response)
    }

    public async delete<T>(uri: string, data?: Record<string, any>): Promise<T> {
        const fetchParams = this.getFetchParams('DELETE')
        const queryParams = data ? '?' + stringify(data) : ''

        const response = await fetch(this.getUrl(uri) + queryParams, fetchParams)

        this.checkRedirect(response)
        this.checkError(response)

        return this.convertToJson<T>(response)
    }

    private getUrl(uri: string): string {
        return this._host ? this.combineUrl(this._host, uri) : uri
    }

    private getFetchParams(method: HttpMethod, body?: any): RequestInit {
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
            redirect: 'manual',
            referrer: 'no-referrer',
            body: this.isWithBody(method) ? JSON.stringify(body) : null
        }
    }

    private isWithBody(method: HttpMethod): boolean {
        return method === 'POST' || method === 'PUT' || method === 'PATCH'
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
        const noContentStatusCode = 204

        if (response.status === noContentStatusCode) {
            return (void 0 as unknown) as T
        }

        const result = (await response?.json()) as unknown
        return result as T
    }

    private combineUrl(host?: string, path?: string): string {
        return new URL(path || '', host).href.replace(/\/$/, '')
    }
}
