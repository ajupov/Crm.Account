import Customer from '../models/Customer'
import CustomerGetPagedListRequest from '../models/CustomerGetPagedListRequest'
import CustomerGetPagedListResponse from '../models/CustomerGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomersClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Customer> =>
        this._factory.getAsync<Customer>(this._host + '/Customers/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Customer[]> =>
        this._factory.postAsync<Customer[]>(this._host + '/Customers/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: CustomerGetPagedListRequest): Promise<CustomerGetPagedListResponse> =>
        this._factory.postAsync<CustomerGetPagedListResponse>(
            this._host + '/Customers/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (customer?: Customer): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Customers/v1/Create', void 0, customer)

    public UpdateAsync = (customer?: Customer): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/v1/Update', void 0, customer)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Customers/v1/Restore', void 0, values)
}
