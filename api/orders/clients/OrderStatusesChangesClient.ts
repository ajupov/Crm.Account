import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderStatusChangeGetPagedListRequest from '../models/OrderStatusChangeGetPagedListRequest'
import OrderStatusChangeGetPagedListResponse from '../models/OrderStatusChangeGetPagedListResponse'

export default class OrderStatusesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: OrderStatusChangeGetPagedListRequest
    ): Promise<OrderStatusChangeGetPagedListResponse> =>
        this._factory.postAsync<OrderStatusChangeGetPagedListResponse>(
            this._host + '/Orders/Statuses/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
