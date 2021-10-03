import ActivityComment from '../models/ActivityComment'
import ActivityCommentGetPagedListRequest from '../models/ActivityCommentGetPagedListRequest'
import ActivityCommentGetPagedListResponse from '../models/ActivityCommentGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class ActivityCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (
        request?: ActivityCommentGetPagedListRequest
    ): Promise<ActivityCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityCommentGetPagedListResponse>('/Activities/Comments/v1/GetPagedList', request)

    public CreateAsync = (comment?: ActivityComment): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).put('/Activities/Comments/v1/Create', comment)
}
