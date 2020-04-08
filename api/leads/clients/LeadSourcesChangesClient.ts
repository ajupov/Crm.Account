/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import LeadSourceChangeGetPagedListRequest from '../models/LeadSourceChangeGetPagedListRequest'
import LeadSourceChangeGetPagedListResponse from '../models/LeadSourceChangeGetPagedListResponse'

export default class LeadSourcesChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadSourceChangeGetPagedListRequest): Promise<LeadSourceChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadSourceChangeGetPagedListResponse>('/Leads/Sources/Changes/v1/GetPagedList', request)
}
