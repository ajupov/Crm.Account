import IHttpClientFactory from '../../IHttpClientFactory'
import UserSetting from '../models/UserSetting'

export default class UserSettingsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetNotSetListAsync = (): Promise<UserSetting> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<UserSetting>('/Settings/User/v1/Get')
}
