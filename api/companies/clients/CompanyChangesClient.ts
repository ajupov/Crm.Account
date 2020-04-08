/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import CompanyChangeGetPagedListRequest from '../models/CompanyChangeGetPagedListRequest'
import CompanyChangeGetPagedListResponse from '../models/CompanyChangeGetPagedListResponse'

export default class CompanyChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: CompanyChangeGetPagedListRequest): Promise<CompanyChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<CompanyChangeGetPagedListResponse>('/Companies/Changes/v1/GetPagedList', request)
}
