import CustomerComment from '../models/CustomerComment'
import CustomerCommentGetPagedListRequest from '../models/CustomerCommentGetPagedListRequest'
import CustomerCommentGetPagedListResponse from '../models/CustomerCommentGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class CustomerCommentsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: CustomerCommentGetPagedListRequest
    ): Promise<CustomerCommentGetPagedListResponse> =>
        this._factory.postAsync<CustomerCommentGetPagedListResponse>(
            this._host + '/Customers/Comments/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (comment?: CustomerComment): Promise<void> =>
        this._factory.postAsync(this._host + '/Customers/Comments/v1/Create', void 0, comment)
}
