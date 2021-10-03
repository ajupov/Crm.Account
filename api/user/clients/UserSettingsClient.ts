import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserSetting from '../models/UserSetting'

export default class UserSettingsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (): Promise<UserSetting> =>
        this._factory.getAsync<UserSetting>(this._host + '/User/Settings/v1/Get')
}
