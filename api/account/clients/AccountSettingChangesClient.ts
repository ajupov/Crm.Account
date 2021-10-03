import AccountSettingGetPagedListRequest from '../models/AccountSettingChangeGetPagedListRequest'
import AccountSettingGetPagedListResponse from '../models/AccountSettingChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class AccountSettingChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: AccountSettingGetPagedListRequest
    ): Promise<AccountSettingGetPagedListResponse> =>
        this._factory.postAsync<AccountSettingGetPagedListResponse>(
            this._host + '/Account/Settings/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
