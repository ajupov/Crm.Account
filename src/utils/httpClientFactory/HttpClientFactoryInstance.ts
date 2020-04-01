import Configuration from '../../configuration/Configuration'
import HttpClientFactory from './HttpClientFactory'
import IHttpClientFactory from '../../../api/IHttpClientFactory'

export default class HttpClientFactoryInstance {
    private static readonly configuration = new Configuration()
    private static _api: IHttpClientFactory

    public static get Api(): IHttpClientFactory {
        if (!HttpClientFactoryInstance._api) {
            HttpClientFactoryInstance._api = new HttpClientFactory(HttpClientFactoryInstance.configuration.ApiUrl)
        }

        return HttpClientFactoryInstance._api
    }
}
