import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import SupplierAttributeChangeGetPagedListRequest from '../models/SupplierAttributeChangeGetPagedListRequest'
import SupplierAttributeChangeGetPagedListResponse from '../models/SupplierAttributeChangeGetPagedListResponse'

export default class SupplierAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: SupplierAttributeChangeGetPagedListRequest
    ): Promise<SupplierAttributeChangeGetPagedListResponse> =>
        this._factory.postAsync<SupplierAttributeChangeGetPagedListResponse>(
            this._host + '/Suppliers/Attributes/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
