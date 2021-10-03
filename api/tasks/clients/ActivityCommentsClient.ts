import ActivityComment from '../models/ActivityComment'
import ActivityCommentGetPagedListRequest from '../models/ActivityCommentGetPagedListRequest'
import ActivityCommentGetPagedListResponse from '../models/ActivityCommentGetPagedListResponse'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityCommentsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
                this._host = host
        this._factory = factory
    }

    public GetPagedListAsync = (
        request?: ActivityCommentGetPagedListRequest
    ): Promise<ActivityCommentGetPagedListResponse> =>
        this._factory
            .
            .postAsync<ActivityCommentGetPagedListResponse>('/Activities/Comments/v1/GetPagedList', request)

    public CreateAsync = (comment?: ActivityComment): Promise<void> =>
        this._factory.putAsync('/Activities/Comments/v1/Create', comment)
}
