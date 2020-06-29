import ContactComment from '../models/ContactComment'
import ContactCommentGetPagedListRequest from '../models/ContactCommentGetPagedListRequest'
import ContactCommentGetPagedListResponse from '../models/ContactCommentGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class ContactCommentsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ContactCommentGetPagedListRequest): Promise<ContactCommentGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ContactCommentGetPagedListResponse>('/Contacts/Comments/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (comment?: ContactComment): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/Contacts/Comments/v1/Create', comment)
}
