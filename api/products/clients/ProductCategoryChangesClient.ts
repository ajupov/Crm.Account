import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductCategoryChangeGetPagedListRequest from '../models/ProductCategoryChangeGetPagedListRequest'
import ProductCategoryChangeGetPagedListResponse from '../models/ProductCategoryChangeGetPagedListResponse'

export default class ProductCategoryChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ProductCategoryChangeGetPagedListRequest
    ): Promise<ProductCategoryChangeGetPagedListResponse> =>
        this._factory.postAsync<ProductCategoryChangeGetPagedListResponse>(
            this._host + '/Products/Categories/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
