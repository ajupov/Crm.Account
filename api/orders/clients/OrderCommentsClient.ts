import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import OrderComment from '../models/OrderComment'
import OrderCommentGetPagedListRequest from '../models/OrderCommentGetPagedListRequest'
import OrderCommentGetPagedListResponse from '../models/OrderCommentGetPagedListResponse'

export default class OrderCommentsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: OrderCommentGetPagedListRequest): Promise<OrderCommentGetPagedListResponse> =>
        this._factory.postAsync<OrderCommentGetPagedListResponse>(
            this._host + '/Orders/Comments/v1/GetPagedList',
            void 0,
            request
        )

    public CreateAsync = (comment?: OrderComment): Promise<void> =>
        this._factory.postAsync(this._host + '/Orders/Comments/v1/Create', void 0, comment)
}
