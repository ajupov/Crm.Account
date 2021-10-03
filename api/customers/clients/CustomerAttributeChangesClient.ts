import CustomerAttributeChangeGetPagedListRequest from '../models/CustomerAttributeChangeGetPagedListRequest'
import CustomerAttributeChangeGetPagedListResponse from '../models/CustomerAttributeChangeGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomerAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: CustomerAttributeChangeGetPagedListRequest
    ): Promise<CustomerAttributeChangeGetPagedListResponse> =>
        this._factory.postAsync<CustomerAttributeChangeGetPagedListResponse>(
            this._host + '/Customers/Attributes/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
