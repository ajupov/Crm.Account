/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ProductChangeGetPagedListRequest from '../models/ProductChangeGetPagedListRequest'
import ProductChangeGetPagedListResponse from '../models/ProductChangeGetPagedListResponse'

export default class ProductChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ProductChangeGetPagedListRequest): Promise<ProductChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductChangeGetPagedListResponse>('/Products/Changes/v1/GetPagedList', request)
}
