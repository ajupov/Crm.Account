import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductAttributeChangeGetPagedListRequest from '../models/ProductAttributeChangeGetPagedListRequest'
import ProductAttributeChangeGetPagedListResponse from '../models/ProductAttributeChangeGetPagedListResponse'

export default class ProductAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ProductAttributeChangeGetPagedListRequest
    ): Promise<ProductAttributeChangeGetPagedListResponse> =>
        this._factory.postAsync<ProductAttributeChangeGetPagedListResponse>(
            this._host + '/Products/Attributes/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
