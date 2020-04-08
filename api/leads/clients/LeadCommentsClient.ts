/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import LeadCommentGetPagedListRequest from '../models/LeadCommentGetPagedListRequest'
import LeadCommentGetPagedListResponse from '../models/LeadCommentGetPagedListResponse'
import LeadComment from '../models/LeadComment'

export default class LeadCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadCommentGetPagedListRequest): Promise<LeadCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadCommentGetPagedListResponse>('/Leads/Comments/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (comment?: LeadComment): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/Leads/Comments/v1/Create', comment)
}
