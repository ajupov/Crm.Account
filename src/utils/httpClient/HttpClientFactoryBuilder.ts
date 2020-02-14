import HttpClientFactory from './HttpClientFactory'
import IHttpClientFactory from './../../../.generated/litecrm_api/IHttpClientFactory'

export class HttpClientFactoryBuilder {
    private _host = ''

    public WithHost(host: string): HttpClientFactoryBuilder {
        this._host = host

        return this
    }

    public Build(): IHttpClientFactory {
        return new HttpClientFactory(this._host)
    }
}
