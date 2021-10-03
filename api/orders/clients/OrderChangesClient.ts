import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderChangeGetPagedListRequest from '../models/OrderChangeGetPagedListRequest'
import OrderChangeGetPagedListResponse from '../models/OrderChangeGetPagedListResponse'

export default class OrderChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: OrderChangeGetPagedListRequest): Promise<OrderChangeGetPagedListResponse> =>
        this._factory.postAsync<OrderChangeGetPagedListResponse>(
            this._host + '/Orders/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
