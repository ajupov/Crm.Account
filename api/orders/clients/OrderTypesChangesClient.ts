import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderTypeChangeGetPagedListRequest from '../models/OrderTypeChangeGetPagedListRequest'
import OrderTypeChangeGetPagedListResponse from '../models/OrderTypeChangeGetPagedListResponse'

export default class OrderTypesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: OrderTypeChangeGetPagedListRequest
    ): Promise<OrderTypeChangeGetPagedListResponse> =>
        this._factory.postAsync<OrderTypeChangeGetPagedListResponse>(
            this._host + '/Orders/Types/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
