import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import SupplierChangeGetPagedListRequest from '../models/SupplierChangeGetPagedListRequest'
import SupplierChangeGetPagedListResponse from '../models/SupplierChangeGetPagedListResponse'

export default class SupplierChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: SupplierChangeGetPagedListRequest
    ): Promise<SupplierChangeGetPagedListResponse> =>
        this._factory.postAsync<SupplierChangeGetPagedListResponse>(
            this._host + '/Suppliers/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
