import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import Order from '../models/Order'
import OrderGetPagedListRequest from '../models/OrderGetPagedListRequest'
import OrderGetPagedListResponse from '../models/OrderGetPagedListResponse'

export default class OrdersClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Order> =>
        this._factory.getAsync<Order>(this._host + '/Orders/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Order[]> =>
        this._factory.postAsync<Order[]>(this._host + '/Orders/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: OrderGetPagedListRequest): Promise<OrderGetPagedListResponse> =>
        this._factory.postAsync<OrderGetPagedListResponse>(this._host + '/Orders/v1/GetPagedList', void 0, request)

    public CreateAsync = (order?: Order): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Orders/v1/Create', void 0, order)

    public UpdateAsync = (order?: Order): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/v1/Update', void 0, order)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/v1/Restore', void 0, values)
}
