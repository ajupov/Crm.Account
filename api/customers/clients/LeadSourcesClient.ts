import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import LeadSource from '../models/LeadSource'
import LeadSourceGetPagedListRequest from '../models/LeadSourceGetPagedListRequest'
import LeadSourceGetPagedListResponse from '../models/LeadSourceGetPagedListResponse'

export default class LeadSourcesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<LeadSource> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<LeadSource>('/Leads/Sources/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<LeadSource[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadSource[]>('/Leads/Sources/v1/GetList', values)

    public GetPagedListAsync = (request?: LeadSourceGetPagedListRequest): Promise<LeadSourceGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<LeadSourceGetPagedListResponse>('/Leads/Sources/v1/GetPagedList', request)

    public CreateAsync = (source?: LeadSource): Promise<string> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).put<string>('/Leads/Sources/v1/Create', source)

    public UpdateAsync = (source?: LeadSource): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Leads/Sources/v1/Update', source)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Leads/Sources/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Leads/Sources/v1/Restore', values)
}
