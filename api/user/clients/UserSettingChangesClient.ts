import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserSettingGetPagedListRequest from '../models/UserSettingChangeGetPagedListRequest'
import UserSettingGetPagedListResponse from '../../user/models/UserSettingChangeGetPagedListResponse'

export default class UserSettingChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: UserSettingGetPagedListRequest): Promise<UserSettingGetPagedListResponse> =>
        this._factory.postAsync<UserSettingGetPagedListResponse>(
            this._host + '/User/Settings/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
