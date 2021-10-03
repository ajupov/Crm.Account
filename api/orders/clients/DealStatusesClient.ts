import DealStatus from '../models/DealStatus'
import DealStatusGetPagedListRequest from '../models/DealStatusGetPagedListRequest'
import DealStatusGetPagedListResponse from '../models/DealStatusGetPagedListResponse'
import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class DealStatusesClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (id: string): Promise<DealStatus> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<DealStatus>('/Deals/Statuses/v1/Get', { id })

    public GetListAsync = (values?: string[]): Promise<DealStatus[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealStatus[]>('/Deals/Statuses/v1/GetList', values)

    public GetPagedListAsync = (request?: DealStatusGetPagedListRequest): Promise<DealStatusGetPagedListResponse> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .post<DealStatusGetPagedListResponse>('/Deals/Statuses/v1/GetPagedList', request)

    public CreateAsync = (status?: DealStatus): Promise<string> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put<string>('/Deals/Statuses/v1/Create', status)

    public UpdateAsync = (status?: DealStatus): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Deals/Statuses/v1/Update', status)

    public DeleteAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Deals/Statuses/v1/Delete', values)

    public RestoreAsync = (values?: string[]): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).patch('/Deals/Statuses/v1/Restore', values)
}
