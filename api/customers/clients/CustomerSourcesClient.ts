import CustomerSource from '../models/CustomerSource'
import CustomerSourceGetPagedListRequest from '../models/CustomerSourceGetPagedListRequest'
import CustomerSourceGetPagedListResponse from '../models/CustomerSourceGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomerSourcesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<CustomerSource> =>
        this._factory.getAsync<CustomerSource>(this._host + '/Customers/Sources/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<CustomerSource[]> =>
        this._factory.postAsync<CustomerSource[]>(this._host + '/Customers/Sources/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: CustomerSourceGetPagedListRequest
    ): Promise<CustomerSourceGetPagedListResponse> =>
        this._factory.postAsync<CustomerSourceGetPagedListResponse>(
            this._host + '/Customers/Sources/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (source?: CustomerSource): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Customers/Sources/v1/Create', void 0, source)

    public UpdateAsync = (source?: CustomerSource): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/Sources/v1/Update', void 0, source)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/Sources/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/Sources/v1/Restore', void 0, values)
}
