/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ActivityCommentGetPagedListRequest from '../models/ActivityCommentGetPagedListRequest'
import ActivityCommentGetPagedListResponse from '../models/ActivityCommentGetPagedListResponse'
import ActivityComment from '../models/ActivityComment'

export default class ActivityCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ActivityCommentGetPagedListRequest): Promise<ActivityCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ActivityCommentGetPagedListResponse>('/Activities/Comments/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (comment?: ActivityComment): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/Activities/Comments/v1/Create', comment)
}
