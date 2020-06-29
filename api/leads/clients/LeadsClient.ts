import IHttpClientFactory from '../../IHttpClientFactory'
import Lead from '../models/Lead'
import LeadGetPagedListRequest from '../models/LeadGetPagedListRequest'
import LeadGetPagedListResponse from '../models/LeadGetPagedListResponse'

export default class LeadsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<Lead> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<Lead>('/Leads/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<Lead[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<Lead[]>('/Leads/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadGetPagedListRequest): Promise<LeadGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadGetPagedListResponse>('/Leads/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (lead?: Lead): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Leads/v1/Create', lead)

    // prettier-ignore
    public UpdateAsync = (lead?: Lead): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/v1/Update', lead)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/v1/Restore', values)
}
