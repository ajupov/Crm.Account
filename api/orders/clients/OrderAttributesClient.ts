import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderAttribute from '../models/OrderAttribute'
import OrderAttributeGetPagedListRequest from '../models/OrderAttributeGetPagedListRequest'
import OrderAttributeGetPagedListResponse from '../models/OrderAttributeGetPagedListResponse'

export default class OrderAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<OrderAttribute> =>
        this._factory.getAsync<OrderAttribute>(this._host + '/Orders/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<OrderAttribute[]> =>
        this._factory.postAsync<OrderAttribute[]>(this._host + '/Orders/Attributes/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: OrderAttributeGetPagedListRequest
    ): Promise<OrderAttributeGetPagedListResponse> =>
        this._factory.postAsync<OrderAttributeGetPagedListResponse>(
            this._host + '/Orders/Attributes/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (attribute?: OrderAttribute): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Orders/Attributes/v1/Create', void 0, attribute)

    public UpdateAsync = (attribute?: OrderAttribute): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Attributes/v1/Update', void 0, attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Attributes/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Orders/Attributes/v1/Restore', void 0, values)
}
