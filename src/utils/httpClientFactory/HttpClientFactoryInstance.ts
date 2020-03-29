import HttpClientFactoryCreate from './HttpClientFactoryCreate'
import IHttpClientFactory from '../../../api/IHttpClientFactory'

export default class HttpClientFactoryInstance {
    private static _api: IHttpClientFactory

    public static get Api(): IHttpClientFactory {
        if (!HttpClientFactoryInstance._api) {
            HttpClientFactoryInstance._api = HttpClientFactoryCreate.HttpClientFactory.WithApiUrl().Build()
        }

        return HttpClientFactoryInstance._api
    }

    httpClientFactory = HttpClientFactoryCreate.HttpClientFactory.WithApiUrl().Build()
}
