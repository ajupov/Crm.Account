import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import Supplier from '../models/Supplier'
import SupplierGetPagedListRequest from '../models/SupplierGetPagedListRequest'
import SupplierGetPagedListResponse from '../models/SupplierGetPagedListResponse'

export default class SuppliersClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<Supplier> =>
        this._factory.getAsync<Supplier>(this._host + '/Suppliers/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<Supplier[]> =>
        this._factory.postAsync<Supplier[]>(this._host + '/Suppliers/v1/GetList', void 0, values)

    public GetPagedListAsync = (request?: SupplierGetPagedListRequest): Promise<SupplierGetPagedListResponse> =>
        this._factory.postAsync<SupplierGetPagedListResponse>(
            this._host + '/Suppliers/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (supplier?: Supplier): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Suppliers/v1/Create', void 0, supplier)

    public UpdateAsync = (supplier?: Supplier): Promise<void> =>
        this._factory.patchAsync(this._host + '/Suppliers/v1/Update', void 0, supplier)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Suppliers/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Suppliers/v1/Restore', void 0, values)
}
