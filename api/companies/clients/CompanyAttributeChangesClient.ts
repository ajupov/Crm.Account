import CompanyAttributeChangeGetPagedListRequest from '../models/CompanyAttributeChangeGetPagedListRequest'
import CompanyAttributeChangeGetPagedListResponse from '../models/CompanyAttributeChangeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class CompanyAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: CompanyAttributeChangeGetPagedListRequest): Promise<CompanyAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<CompanyAttributeChangeGetPagedListResponse>('/Companies/Attributes/Changes/v1/GetPagedList', request)
}
