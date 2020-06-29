import IHttpClientFactory from '../../IHttpClientFactory'
import LeadSource from '../models/LeadSource'
import LeadSourceGetPagedListRequest from '../models/LeadSourceGetPagedListRequest'
import LeadSourceGetPagedListResponse from '../models/LeadSourceGetPagedListResponse'

export default class LeadSourcesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (id: string): Promise<LeadSource> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<LeadSource>('/Leads/Sources/v1/Get', { id })

    // prettier-ignore
    public GetListAsync = (values?: string[]): Promise<LeadSource[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadSource[]>('/Leads/Sources/v1/GetList', values)

    // prettier-ignore
    public GetPagedListAsync = (request?: LeadSourceGetPagedListRequest): Promise<LeadSourceGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadSourceGetPagedListResponse>('/Leads/Sources/v1/GetPagedList', request)

    // prettier-ignore
    public CreateAsync = (source?: LeadSource): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Leads/Sources/v1/Create', source)

    // prettier-ignore
    public UpdateAsync = (source?: LeadSource): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/Sources/v1/Update', source)

    // prettier-ignore
    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/Sources/v1/Delete', values)

    // prettier-ignore
    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .patch('/Leads/Sources/v1/Restore', values)
}
