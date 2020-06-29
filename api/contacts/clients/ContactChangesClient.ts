import ContactChangeGetPagedListRequest from '../models/ContactChangeGetPagedListRequest'
import ContactChangeGetPagedListResponse from '../models/ContactChangeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class ContactChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ContactChangeGetPagedListRequest): Promise<ContactChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ContactChangeGetPagedListResponse>('/Contacts/Changes/v1/GetPagedList', request)
}
