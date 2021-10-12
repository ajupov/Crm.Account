import CustomerAttribute from '../models/CustomerAttribute'
import CustomerAttributeGetPagedListRequest from '../models/CustomerAttributeGetPagedListRequest'
import CustomerAttributeGetPagedListResponse from '../models/CustomerAttributeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomerAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<CustomerAttribute> =>
        this._factory.getAsync<CustomerAttribute>(this._host + '/Customers/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<CustomerAttribute[]> =>
        this._factory.postAsync<CustomerAttribute[]>(this._host + '/Customers/Attributes/v1/GetList', values)

    public GetPagedListAsync = (
        request?: CustomerAttributeGetPagedListRequest
    ): Promise<CustomerAttributeGetPagedListResponse> =>
        this._factory.postAsync<CustomerAttributeGetPagedListResponse>(
            this._host + '/Customers/Attributes/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (attribute?: CustomerAttribute): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Customers/Attributes/v1/Create', void 0, attribute)

    public UpdateAsync = (attribute?: CustomerAttribute): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/Attributes/v1/Update', void 0, attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/Attributes/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/Attributes/v1/Restore', void 0, values)
}
