import {
    addParameters,
    ensureNoRedirect,
    ensureSuccessStatusCode,
    getFetchParams,
    readResponseContentAsync
} from '../httpExtensions'

import IJsonHttpClientFactory from './IJsonHttpClientFactory'

export default class JsonHttpClientFactory implements IJsonHttpClientFactory {
    public async getAsync<T>(uri: string, parameters?: Record<string, any>, headers?: HeadersInit): Promise<T> {
        const response = await fetch(addParameters(uri, parameters), getFetchParams('GET', void 0, headers))

        await ensureSuccessStatusCode(response)
        ensureNoRedirect(response)

        return readResponseContentAsync(response)
    }

    public async postAsync<T>(
        uri: string,
        parameters?: Record<string, any>,
        body?: Record<string, any>,
        headers?: HeadersInit
    ): Promise<T> {
        const response = await fetch(addParameters(uri, parameters), getFetchParams('POST', body, headers))

        await ensureSuccessStatusCode(response)
        ensureNoRedirect(response)

        return readResponseContentAsync(response)
    }

    public async putAsync<T>(
        uri: string,
        parameters?: Record<string, any>,
        body?: Record<string, any>,
        headers?: HeadersInit
    ): Promise<T> {
        const response = await fetch(addParameters(uri, parameters), getFetchParams('PUT', body, headers))

        await ensureSuccessStatusCode(response)
        ensureNoRedirect(response)

        return readResponseContentAsync(response)
    }

    public async patchAsync<T>(
        uri: string,
        parameters?: Record<string, any>,
        body?: Record<string, any>,
        headers?: HeadersInit
    ): Promise<T> {
        const response = await fetch(addParameters(uri, parameters), getFetchParams('PATCH', body, headers))

        await ensureSuccessStatusCode(response)
        ensureNoRedirect(response)

        return readResponseContentAsync(response)
    }

    public async deleteAsync<T>(uri: string, parameters?: Record<string, any>, headers?: HeadersInit): Promise<T> {
        const response = await fetch(addParameters(uri, parameters), getFetchParams('DELETE', void 0, headers))

        await ensureSuccessStatusCode(response)
        ensureNoRedirect(response)

        return readResponseContentAsync(response)
    }
}
