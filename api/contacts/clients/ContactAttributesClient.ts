import ContactAttribute from '../models/ContactAttribute'
import ContactAttributeGetPagedListRequest from '../models/ContactAttributeGetPagedListRequest'
import ContactAttributeGetPagedListResponse from '../models/ContactAttributeGetPagedListResponse'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class ContactAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Contacts/Attributes/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<ContactAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<ContactAttribute>('/Contacts/Attributes/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<ContactAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ContactAttribute[]>('/Contacts/Attributes/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: ContactAttributeGetPagedListRequest): Promise<ContactAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<ContactAttributeGetPagedListResponse>('/Contacts/Attributes/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (attribute?: ContactAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Contacts/Attributes/v1/Create', attribute)

    // prettier-ignore
    public UpdateAsync = (attribute?: ContactAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Contacts/Attributes/v1/Update', attribute)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Contacts/Attributes/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Contacts/Attributes/v1/Restore', values)
}
