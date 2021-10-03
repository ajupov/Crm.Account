import Configuration from '../../configuration/Configuration'
import IJsonHttpClientFactory from '../http/jsonHttpClient/IJsonHttpClientFactory'
import JsonHttpClientFactory from '../http/jsonHttpClient/JsonHttpClientFactory'

export default class HttpClientFactory {
    private static _host: string
    private static _api: IJsonHttpClientFactory

    public static get Api(): IJsonHttpClientFactory {
        if (!this._api) {
            this._api = new JsonHttpClientFactory()
        }

        return this._api
    }

    public static get Host(): string {
        if (!this._host) {
            this._host = new Configuration().ApiHost
        }

        return this._host
    }
}
