import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserInfo from '../models/UserInfo'

export default class UserInfoClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (): Promise<UserInfo> => this._factory.getAsync<UserInfo>(this._host + '/UserInfo/Get')
}
