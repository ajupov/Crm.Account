import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderAttributeChangeGetPagedListRequest from '../models/OrderAttributeChangeGetPagedListRequest'
import OrderAttributeChangeGetPagedListResponse from '../models/OrderAttributeChangeGetPagedListResponse'

export default class OrderAttributeChangesClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: OrderAttributeChangeGetPagedListRequest
    ): Promise<OrderAttributeChangeGetPagedListResponse> =>
        this._factory.postAsync<OrderAttributeChangeGetPagedListResponse>(
            this._host + '/Orders/Attributes/Changes/v1/GetPagedList',
            void 0,
            request
        )
}
