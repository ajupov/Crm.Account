import DealComment from '../models/DealComment'
import DealCommentGetPagedListRequest from '../models/DealCommentGetPagedListRequest'
import DealCommentGetPagedListResponse from '../models/DealCommentGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealCommentsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (request?: DealCommentGetPagedListRequest): Promise<DealCommentGetPagedListResponse> =>
        this._factory
            .
            .postAsync<DealCommentGetPagedListResponse>('/Deals/Comments/v1/GetPagedList', request)

    public CreateAsync = (comment?: DealComment): Promise<void> =>
        this._factory.putAsync('/Deals/Comments/v1/Create', comment)
}
