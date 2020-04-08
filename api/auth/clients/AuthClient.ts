/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'

export default class AuthClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public IsAuthenticatedAsync = (): Promise<boolean> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<boolean>('/Auth/IsAuthenticated')
}
