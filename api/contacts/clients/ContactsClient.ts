/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import Contact from '../models/Contact'
import ContactGetPagedListRequest from '../models/ContactGetPagedListRequest'
import ContactGetPagedListResponse from '../models/ContactGetPagedListResponse'

export default class ContactsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<Contact> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<Contact>('/Contacts/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<Contact[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Contact[]>('/Contacts/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ContactGetPagedListRequest): Promise<ContactGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ContactGetPagedListResponse>('/Contacts/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (contact?: Contact): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Contacts/v1/Create', contact)

    // prettier-ignore
    public UpdateAsync = (contact?: Contact): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Contacts/v1/Update', contact)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Contacts/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Contacts/v1/Restore', values)
}
