import IHttpClientFactory from '../../IHttpClientFactory'
import UserSettingGetPagedListRequest from '../models/UserSettingChangeGetPagedListRequest'
import UserSettingGetPagedListResponse from '../models/UserSettingChangeGetPagedListResponse'

export default class UserSettingChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: UserSettingGetPagedListRequest): Promise<UserSettingGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<UserSettingGetPagedListResponse>('/Settings/User/Changes/v1/GetPagedList', request)
}
