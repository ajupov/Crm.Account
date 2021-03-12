import AccountSetting from '../../account/models/AccountSetting'
import AccountSettingActivityIndustry from '../models/AccountSettingActivityIndustry'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class AccountSettingsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (): Promise<AccountSetting> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<AccountSetting>('/Account/Settings/v1/Get')

    // prettier-ignore
    public GetActivityIndustriesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('Account//Settings/v1/GetActivityIndustries')

    // prettier-ignore
    public SetActivityIndustryAsync = (industry: AccountSettingActivityIndustry): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Account/Settings/v1/SetActivityIndustry', { industry })
}
