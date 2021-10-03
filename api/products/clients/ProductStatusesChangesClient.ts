import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import ProductStatusChangeGetPagedListRequest from '../models/ProductStatusChangeGetPagedListRequest'
import ProductStatusChangeGetPagedListResponse from '../models/ProductStatusChangeGetPagedListResponse'

export default class ProductStatusesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ProductStatusChangeGetPagedListRequest
    ): Promise<ProductStatusChangeGetPagedListResponse> =>
        this._factory.postAsync<ProductStatusChangeGetPagedListResponse>(
            this._host + '/Products/Statuses/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
