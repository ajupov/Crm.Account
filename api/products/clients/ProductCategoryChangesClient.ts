import IHttpClientFactory from '../../IHttpClientFactory'
import ProductCategoryChangeGetPagedListRequest from '../models/ProductCategoryChangeGetPagedListRequest'
import ProductCategoryChangeGetPagedListResponse from '../models/ProductCategoryChangeGetPagedListResponse'

export default class ProductCategoryChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ProductCategoryChangeGetPagedListRequest): Promise<ProductCategoryChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductCategoryChangeGetPagedListResponse>('/Products/Categories/Changes/v1/GetPagedList', request)
}
