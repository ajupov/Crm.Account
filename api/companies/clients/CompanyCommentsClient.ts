/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import CompanyCommentGetPagedListRequest from '../models/CompanyCommentGetPagedListRequest'
import CompanyCommentGetPagedListResponse from '../models/CompanyCommentGetPagedListResponse'
import CompanyComment from '../models/CompanyComment'

export default class CompanyCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: CompanyCommentGetPagedListRequest): Promise<CompanyCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<CompanyCommentGetPagedListResponse>('/Companies/Comments/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (comment?: CompanyComment): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/Companies/Comments/v1/Create', comment)
}
