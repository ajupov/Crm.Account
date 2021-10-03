import { stringify } from 'query-string'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export function addParameters(uri: string, parameters?: Record<string, string>): string {
    return uri + (parameters ? `?${stringify(parameters)}` : '')
}

export function combineUrl(host?: string, path?: string): string {
    return new URL(path || '', host).href.replace(/\/$/, '')
}

export function getFetchParams(method: HttpMethod, body?: any, headers?: HeadersInit): RequestInit {
    return {
        method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
            ...headers,
            ...{
                Accept: 'application/json; charset=UTF-8',
                'Content-Type': 'application/json; charset=UTF-8',
                pragma: 'no-cache',
                'cache-control': 'no-cache'
            }
        },
        redirect: 'manual',
        referrer: 'no-referrer',
        body: method === 'POST' || method === 'PUT' || method === 'PATCH' ? JSON.stringify(body) : null
    }
}

export async function readResponseContentAsync<TResult>(response: Response): Promise<TResult> {
    const noContentStatusCode = 204

    if (response.status === noContentStatusCode) {
        return void 0 as unknown as TResult
    }

    const result = (await response?.json()) as unknown
    return result as TResult
}

export function ensureSuccessStatusCode(response: Response): void {
    if (!response.ok) {
        throw Error(response.statusText)
    }
}

export function ensureNoRedirect(response: Response): void {
    const location = response.headers.get('location')
    if (location) {
        window.location.href = location
    }
}
