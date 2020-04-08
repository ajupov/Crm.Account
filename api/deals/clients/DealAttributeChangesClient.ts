/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import DealAttributeChangeGetPagedListRequest from '../models/DealAttributeChangeGetPagedListRequest'
import DealAttributeChangeGetPagedListResponse from '../models/DealAttributeChangeGetPagedListResponse'

export default class DealAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: DealAttributeChangeGetPagedListRequest): Promise<DealAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealAttributeChangeGetPagedListResponse>('/Deals/Attributes/Changes/v1/GetPagedList', request)
}
