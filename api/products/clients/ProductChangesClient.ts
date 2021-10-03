import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductChangeGetPagedListRequest from '../models/ProductChangeGetPagedListRequest'
import ProductChangeGetPagedListResponse from '../models/ProductChangeGetPagedListResponse'

export default class ProductChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ProductChangeGetPagedListRequest
    ): Promise<ProductChangeGetPagedListResponse> =>
        this._factory.postAsync<ProductChangeGetPagedListResponse>(
            this._host + '/Products/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
