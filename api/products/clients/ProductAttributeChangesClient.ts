import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductAttributeChangeGetPagedListRequest from '../models/ProductAttributeChangeGetPagedListRequest'
import ProductAttributeChangeGetPagedListResponse from '../models/ProductAttributeChangeGetPagedListResponse'

export default class ProductAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: ProductAttributeChangeGetPagedListRequest
    ): Promise<ProductAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ProductAttributeChangeGetPagedListResponse>('/Products/Attributes/Changes/v1/GetPagedList', request)
}
