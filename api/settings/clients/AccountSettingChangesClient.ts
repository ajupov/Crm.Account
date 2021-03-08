import AccountSettingGetPagedListRequest from '../models/AccountSettingChangeGetPagedListRequest'
import AccountSettingGetPagedListResponse from '../models/AccountSettingChangeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class AccountSettingChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: AccountSettingGetPagedListRequest): Promise<AccountSettingGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<AccountSettingGetPagedListResponse>('/Settings/Account/Changes/v1/GetPagedList', request)
}
