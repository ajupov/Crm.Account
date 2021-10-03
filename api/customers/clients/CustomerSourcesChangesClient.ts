import CustomerSourceChangeGetPagedListRequest from '../models/CustomerSourceChangeGetPagedListRequest'
import CustomerSourceChangeGetPagedListResponse from '../models/CustomerSourceChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomerSourcesChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: CustomerSourceChangeGetPagedListRequest
    ): Promise<CustomerSourceChangeGetPagedListResponse> =>
        this._factory.postAsync<CustomerSourceChangeGetPagedListResponse>(
            this._host + '/Customers/Sources/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
