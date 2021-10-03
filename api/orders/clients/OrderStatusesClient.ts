import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderStatus from '../models/OrderStatus'
import OrderStatusGetPagedListRequest from '../models/OrderStatusGetPagedListRequest'
import OrderStatusGetPagedListResponse from '../models/OrderStatusGetPagedListResponse'

export default class OrderStatusesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<OrderStatus> =>
        this._factory.getAsync<OrderStatus>(this._host + '/Orders/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<OrderStatus[]> =>
        this._factory.postAsync<OrderStatus[]>(this._host + '/Orders/Statuses/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: OrderStatusGetPagedListRequest): Promise<OrderStatusGetPagedListResponse> =>
        this._factory.postAsync<OrderStatusGetPagedListResponse>(
            this._host + '/Orders/Statuses/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (status?: OrderStatus): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Orders/Statuses/v1/Create', void 0, status)

    public UpdateAsync = (status?: OrderStatus): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Statuses/v1/Update', void 0, status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Statuses/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Statuses/v1/Restore', void 0, values)
}
