import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserSetting from '../models/UserSetting'

export default class UserSettingsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (): Promise<UserSetting> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<UserSetting>('/User/Settings/v1/Get')
}
