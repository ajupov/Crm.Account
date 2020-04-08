/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import ContactAttributeChangeGetPagedListRequest from '../models/ContactAttributeChangeGetPagedListRequest'
import ContactAttributeChangeGetPagedListResponse from '../models/ContactAttributeChangeGetPagedListResponse'

export default class ContactAttributeChangesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetPagedListAsync = (request?: ContactAttributeChangeGetPagedListRequest): Promise<ContactAttributeChangeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ContactAttributeChangeGetPagedListResponse>('/Contacts/Attributes/Changes/v1/GetPagedList', request)
}
