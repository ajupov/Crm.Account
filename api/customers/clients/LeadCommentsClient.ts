import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import LeadComment from '../models/LeadComment'
import LeadCommentGetPagedListRequest from '../models/LeadCommentGetPagedListRequest'
import LeadCommentGetPagedListResponse from '../models/LeadCommentGetPagedListResponse'

export default class LeadCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetPagedListAsync = (request?: LeadCommentGetPagedListRequest): Promise<LeadCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadCommentGetPagedListResponse>('/Leads/Comments/v1/GetPagedList', request)

    public CreateAsync = (comment?: LeadComment): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).put('/Leads/Comments/v1/Create', comment)
}
