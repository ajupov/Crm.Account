import IHttpClientFactory from '../../IHttpClientFactory'
import LeadAttributeChangeGetPagedListRequest from '../models/LeadAttributeChangeGetPagedListRequest'
import LeadAttributeChangeGetPagedListResponse from '../models/LeadAttributeChangeGetPagedListResponse'

export default class LeadAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadAttributeChangeGetPagedListRequest): Promise<LeadAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadAttributeChangeGetPagedListResponse>('/Leads/Attributes/Changes/v1/GetPagedList', request)
}
