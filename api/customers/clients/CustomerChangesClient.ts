import CustomerChangeGetPagedListRequest from '../models/CustomerChangeGetPagedListRequest'
import CustomerChangeGetPagedListResponse from '../models/CustomerChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomerChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: CustomerChangeGetPagedListRequest
    ): Promise<CustomerChangeGetPagedListResponse> =>
        this._factory.postAsync<CustomerChangeGetPagedListResponse>(
            this._host + '/Customers/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
