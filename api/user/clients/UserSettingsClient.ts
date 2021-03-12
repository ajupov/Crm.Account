import IHttpClientFactory from '../../IHttpClientFactory'
import UserSetting from '../models/UserSetting'

export default class UserSettingsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (): Promise<UserSetting> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<UserSetting>('/User/Settings/v1/Get')
}
