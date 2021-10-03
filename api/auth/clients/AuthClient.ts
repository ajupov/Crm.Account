import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class AuthClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public IsAuthenticatedAsync = (): Promise<boolean> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<boolean>('/Auth/IsAuthenticated')
}
