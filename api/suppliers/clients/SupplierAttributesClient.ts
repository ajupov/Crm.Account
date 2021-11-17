import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import SupplierAttribute from '../models/SupplierAttribute'
import SupplierAttributeGetPagedListRequest from '../models/SupplierAttributeGetPagedListRequest'
import SupplierAttributeGetPagedListResponse from '../models/SupplierAttributeGetPagedListResponse'

export default class SupplierAttributesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetAsync = (id: string): Promise<SupplierAttribute> =>
        this._factory.getAsync<SupplierAttribute>(this._host + '/Suppliers/Attributes/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<SupplierAttribute[]> =>
        this._factory.postAsync<SupplierAttribute[]>(this._host + '/Suppliers/Attributes/v1/GetList', void 0, values)

    public GetPagedListAsync = (
        request?: SupplierAttributeGetPagedListRequest
    ): Promise<SupplierAttributeGetPagedListResponse> =>
        this._factory.postAsync<SupplierAttributeGetPagedListResponse>(
            this._host + '/Suppliers/Attributes/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (attribute?: SupplierAttribute): Promise<string> =>
        this._factory.postAsync<string>(this._host + '/Suppliers/Attributes/v1/Create', void 0, attribute)

    public UpdateAsync = (attribute?: SupplierAttribute): Promise<void> =>
        this._factory.patchAsync(this._host + '/Suppliers/Attributes/v1/Update', void 0, attribute)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Suppliers/Attributes/v1/Delete', void 0, values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this._factory.patchAsync(this._host + '/Suppliers/Attributes/v1/Restore', void 0, values)
}
