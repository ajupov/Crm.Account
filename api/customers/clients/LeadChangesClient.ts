import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import LeadChangeGetPagedListRequest from '../models/LeadChangeGetPagedListRequest'
import LeadChangeGetPagedListResponse from '../models/LeadChangeGetPagedListResponse'

export default class LeadChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (request?: LeadChangeGetPagedListRequest): Promise<LeadChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadChangeGetPagedListResponse>('/Leads/Changes/v1/GetPagedList', request)
}
