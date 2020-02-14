import IHttpClientFactory, { IHttpClient } from './../../../.generated/litecrm_api/IHttpClientFactory'

import { HttpClient } from './HttpClient'

export default class HttpClientFactory implements IHttpClientFactory {
    private readonly _host: string

    constructor(host: string) {
        this._host = host
    }

    get host(): string {
        return this._host
    }

    createClient(host: string): IHttpClient {
        return new HttpClient(host)
    }
}
