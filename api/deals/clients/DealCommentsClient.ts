import DealComment from '../models/DealComment'
import DealCommentGetPagedListRequest from '../models/DealCommentGetPagedListRequest'
import DealCommentGetPagedListResponse from '../models/DealCommentGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class DealCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: DealCommentGetPagedListRequest): Promise<DealCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealCommentGetPagedListResponse>('/Deals/Comments/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (comment?: DealComment): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/Deals/Comments/v1/Create', comment)
}
