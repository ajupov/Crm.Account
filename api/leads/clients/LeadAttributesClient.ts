import IHttpClientFactory from '../../IHttpClientFactory'
import LeadAttribute from '../models/LeadAttribute'
import LeadAttributeGetPagedListRequest from '../models/LeadAttributeGetPagedListRequest'
import LeadAttributeGetPagedListResponse from '../models/LeadAttributeGetPagedListResponse'

export default class LeadAttributesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetTypesAsync = (): Promise<object> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<object>('/Leads/Attributes/v1/GetTypes')

    // prettier-ignore
    public GetAsync = (id: string): Promise<LeadAttribute> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<LeadAttribute>('/Leads/Attributes/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<LeadAttribute[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadAttribute[]>('/Leads/Attributes/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadAttributeGetPagedListRequest): Promise<LeadAttributeGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadAttributeGetPagedListResponse>('/Leads/Attributes/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (attribute?: LeadAttribute): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Leads/Attributes/v1/Create', attribute)

    // prettier-ignore
    public UpdateAsync = (attribute?: LeadAttribute): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/Attributes/v1/Update', attribute)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/Attributes/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/Attributes/v1/Restore', values)
}
