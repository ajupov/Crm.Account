import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import LeadSourceChangeGetPagedListRequest from '../models/LeadSourceChangeGetPagedListRequest'
import LeadSourceChangeGetPagedListResponse from '../models/LeadSourceChangeGetPagedListResponse'

export default class LeadSourcesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: LeadSourceChangeGetPagedListRequest
    ): Promise<LeadSourceChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadSourceChangeGetPagedListResponse>('/Leads/Sources/Changes/v1/GetPagedList', request)
}
