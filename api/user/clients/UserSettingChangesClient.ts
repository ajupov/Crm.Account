import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserSettingGetPagedListRequest from '../models/UserSettingChangeGetPagedListRequest'
import UserSettingGetPagedListResponse from '../../user/models/UserSettingChangeGetPagedListResponse'

export default class UserSettingChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (request?: UserSettingGetPagedListRequest): Promise<UserSettingGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<UserSettingGetPagedListResponse>('/User/Settings/Changes/v1/GetPagedList', request)
}
