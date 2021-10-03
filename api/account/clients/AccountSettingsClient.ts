import AccountSetting from '../../account/models/AccountSetting'
import AccountSettingActivityIndustry from '../models/AccountSettingActivityIndustry'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class AccountSettingsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }
    public GetAsync = (): Promise<AccountSetting> =>
        this._factory.getAsync<AccountSetting>(this._host + '/Account/Settings/v1/Get')

    public SetActivityIndustryAsync = (industry: AccountSettingActivityIndustry): Promise<void> =>
        this._factory.putAsync('/Account/Settings/v1/SetActivityIndustry', void 0, { industry })
}
