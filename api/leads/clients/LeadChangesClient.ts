import IHttpClientFactory from '../../IHttpClientFactory'
import LeadChangeGetPagedListRequest from '../models/LeadChangeGetPagedListRequest'
import LeadChangeGetPagedListResponse from '../models/LeadChangeGetPagedListResponse'

export default class LeadChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadChangeGetPagedListRequest): Promise<LeadChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadChangeGetPagedListResponse>('/Leads/Changes/v1/GetPagedList', request)
}
