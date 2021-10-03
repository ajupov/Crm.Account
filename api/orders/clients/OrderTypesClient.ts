import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderType from '../models/OrderType'
import OrderTypeGetPagedListRequest from '../models/OrderTypeGetPagedListRequest'
import OrderTypeGetPagedListResponse from '../models/OrderTypeGetPagedListResponse'

export default class OrderTypesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<OrderType> =>
        this._factory.getAsync<OrderType>(this._host + '/Orders/Types/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<OrderType[]> =>
        this._factory.postAsync<OrderType[]>(this._host + '/Orders/Types/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: OrderTypeGetPagedListRequest): Promise<OrderTypeGetPagedListResponse> =>
        this._factory.postAsync<OrderTypeGetPagedListResponse>(
            this._host + '/Orders/Types/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (type?: OrderType): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Orders/Types/v1/Create', void 0, type)

    public UpdateAsync = (type?: OrderType): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Types/v1/Update', void 0, type)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Types/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Types/v1/Restore', void 0, values)
}
