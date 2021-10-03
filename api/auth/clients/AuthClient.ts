import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class AuthClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public IsAuthenticatedAsync = (): Promise<boolean> =>
        this._factory.getAsync<boolean>(this._host + '/Auth/IsAuthenticated')
}
